import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { CENTER_POCKET, IS_LOADING, LOGOUT } from "../reduxSetup/constant";
import { getStorage } from "../utils/storage";
import { BASE_URL } from "./config";
import { toast } from "react-toastify";

axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const result = getStorage(CENTER_POCKET);
    config.headers = {
      "x-access-token": result.auth.token,
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

const handleErrorTypeCheck = (error, dispatch) => {
  if (error?.response) {
    if (error.response.status === 401 && error.response?.data.error_no === 8) {
      dispatch({ type: LOGOUT });
    }
    const errorMessage = { status: error.response.status, ...error.response.data };
    throw errorMessage;
  } else {
    const errorMessage = { message: error.message };
    throw errorMessage;
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
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData(queryName);
  return useQuery(
    queryName,
    async () => {
      if (!data) {
        dispatch({ type: IS_LOADING, payload: true });
      }
      return axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => handleErrorTypeCheck(err, dispatch));
    },
    {
      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
      onSettled: () => {
        dispatch({ type: IS_LOADING, payload: false });
      },
      enabled
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
        .catch((err) => handleErrorTypeCheck(err, dispatch));
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
        .catch((err) => handleErrorTypeCheck(err, dispatch));
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

export const usePatchRequest = (url, queryNameToInvalidate) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  return useMutation(
    (payload) => {
      dispatch({ type: IS_LOADING, payload: true });
      return axios
        .patch(url, payload)
        .then((res) => res.data)
        .catch((err) => handleErrorTypeCheck(err, dispatch));
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