import axios from "axios";
// import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { IS_LOADING, TOKEN } from "../reduxSetup/constant";
import { getStorage } from "../utils/storage";
import { BASE_URL } from "./config";
import { toast } from "react-toastify";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const result = getStorage(TOKEN);
    config.headers = {
      "x-auth-token": result.token,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const handleErrorTypeCheck = (error) => {
  if (error?.response) {
    throw { status: error.response.status, ...error.response.data };
  } else {
    throw { errors: [{ message: error.message }] };
  }
};

/**
 *
 * @param {string} url
 * @param {string} queryName
 * @param {boolean} enabled
 */
export const useGetResquest = (url, queryName, enabled = true) => {
  const dispatch = useDispatch();
  return useQuery(
    queryName,
    async () => {
      dispatch({ type: IS_LOADING, payload: true });
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => handleErrorTypeCheck(err));
    },
    {
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
      enabled,
      onSettled: () => {
        dispatch({ type: IS_LOADING, payload: false });
      },
    }
  );
};

/**
 *
 * @param {string} url
 * @param {string|Array} queryNameToInvalidate
 */
export const usePostRequest = (url, queryNameToInvalidate) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(
    (payload) => {
      dispatch({ type: IS_LOADING, payload: true });
      return axios
        .post(url, payload)
        .then((res) => res.data)
        .catch((err) => handleErrorTypeCheck(err));
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryNameToInvalidate),
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
      onSettled: () => {
        dispatch({ type: IS_LOADING, payload: false });
      },
    }
  );
};

/**
 *
 * @param {string} url
 * @param {string|Array} queryNameToInvalidate
 */
export const useDeleteRequest = (url, queryNameToInvalidate) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(
    (payload) => {
      dispatch({ type: IS_LOADING, payload: true });
      return axios
        .delete(url, { data: payload })
        .then((res) => res.data)
        .catch((err) => handleErrorTypeCheck(err));
    },
    {
      onSuccess: () => queryClient.invalidateQueries(queryNameToInvalidate),
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
      onSettled: () => {
        dispatch({ type: IS_LOADING, payload: false });
      },
    }
  );
};

/**
 *
 * @param {string} url
 * @param {string|Array} queryNameToInvalidate
 * @param {string|Array} queryCollectionNameToInvalidate
 */
export const usePatchRequest = (
  url,
  queryNameToInvalidate,
  queryCollectionNameToInvalidate
) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(
    (payload) => {
      dispatch({ type: IS_LOADING, payload: true });
      return axios.patch(url, payload).then((res) => res.data);
    },
    {
      onError: (error, _, rollback) => {
        rollback();
        console.log(error);
        toast.error(error.message);
      },
      onSuccess: async () => {
        queryClient.refetchQueries(queryNameToInvalidate);
        if (queryCollectionNameToInvalidate)
          await queryClient.refetchQueries(queryCollectionNameToInvalidate);
      },
      onSettled: () => {
        dispatch({ type: IS_LOADING, payload: false });
      },
    }
  );
};
