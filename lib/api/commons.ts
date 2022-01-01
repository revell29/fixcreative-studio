import axios from 'axios';
import { AboutUs, Faq, FragmentCategory, Reviews } from '~/types/base';
import { API_URL, TOKEN } from '../config';
import qs from 'qs';

export const getCategory = async (): Promise<FragmentCategory[]> => {
  try {
    const res = await axios.get(`${API_URL}/api/catagories`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getAboutUs = async (): Promise<AboutUs> => {
  try {
    const res = await axios.get(`${API_URL}/api/about-us`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getReviews = async (): Promise<Reviews[]> => {
  try {
    const query = qs.stringify({
      populate: '*',
      pagination: {
        page: 1,
        perPage: 10,
      },
      sort: {
        id: 'desc',
      },
    });
    const res = await axios.get(`${API_URL}/api/reviews?${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getFaq = async (): Promise<Faq[]> => {
  try {
    const res = await axios.get(`${API_URL}/api/faqs`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};
