import axios from 'axios';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { TOKEN } from '../reduxSetup/constant';
import { getStorage } from '../utils/storage';
import { BASE_URL } from './config';


axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use((config) => {
    const result = getStorage(TOKEN);
    config.headers = {
        'x-auth-token': result.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    };
    return config;
}, (error) => {
    return Promise.reject(error)
})

const handleErrorTypeCheck = (error) => {
    if (error?.response) {
        throw { status: error.response.status, ...error.response.data };
    } else {
        throw { errors: [{ message: error.message }] };
    }
}

/**
 * 
 * @param {string} url 
 * @param {string} queryName
 * @param {boolean} enabled 
 */
export const useGetResquest = (url, queryName, enabled = true) => {
    return useQuery(queryName, async () => {
        return axios.get(url).then((res) => res.data)
            .catch(err => handleErrorTypeCheck(err))
    },
        {
            onError: (error) => {
                console.log(error);
                NotificationManager.error(error?.errors[0]?.message)
            },
            enabled
        }
    )
}

/**
 * 
 * @param {string} url 
 * @param {string|Array} queryNameToInvalidate 
 */
export const usePostRequest = (url, queryNameToInvalidate) => {
    const queryClient = useQueryClient()
    return useMutation(
        (payload) => axios.post(url, payload)
            .then((res) => res.data)
            .catch(err => handleErrorTypeCheck(err)),
        {
            onSuccess: () => queryClient.invalidateQueries(queryNameToInvalidate),
            onError: (error) => {
                console.log(error);
                NotificationManager.error(error?.errors[0]?.message)
            }
        }
    )
}

/**
 * 
 * @param {string} url 
 * @param {string|Array} queryNameToInvalidate 
 */
export const useDeleteRequest = (url, queryNameToInvalidate) => {
    const queryClient = useQueryClient()
    return useMutation(
        (payload) => axios.delete(url,{data:payload}).then((res) => res.data)
            .catch(err => handleErrorTypeCheck(err)),
        {
            onSuccess: () => queryClient.invalidateQueries(queryNameToInvalidate),
            onError: (error) => {
                console.log(error);
                NotificationManager.error(error?.errors[0]?.message)
            }
        }
    )
}

/**
 * 
 * @param {string} url 
 * @param {string|Array} queryNameToInvalidate 
 * @param {string|Array} queryCollectionNameToInvalidate 
 */
export const usePatchRequest = (url, queryNameToInvalidate, queryCollectionNameToInvalidate) => {
    const queryClient = useQueryClient()
    return useMutation(
        (payload) =>
            axios.patch(url, payload).then((res) => res.data),
        {
            onError: (error, _, rollback) => {
                rollback();
                console.log(error);
                NotificationManager.error(error?.errors[0]?.message)
            },
            onSuccess: async () => {
                queryClient.refetchQueries(queryNameToInvalidate)
                if (queryCollectionNameToInvalidate) await queryClient.refetchQueries(queryCollectionNameToInvalidate)
            },
        }
    )
}
