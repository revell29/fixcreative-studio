import axios from 'axios';
import { AboutUs, FragmentCategory } from '~/types/base';
import { API_URL, TOKEN } from '../config';

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
