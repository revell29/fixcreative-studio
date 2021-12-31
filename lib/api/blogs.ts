import axios from 'axios';
import { API_URL, TOKEN } from '../config';
import qs from 'qs';

export const getBlogsByCategory = async (categoryName: string | string[]) => {
  try {
    const query = qs.stringify({
      populate: '*',
      filters: {
        catagory: {
          category_name: {
            $eq: categoryName,
          },
        },
      },
    });
    const res = await axios.get(`${API_URL}/api/blogs?${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getBlogsBySlug = async (slug: string | string[]) => {
  try {
    const query = qs.stringify({
      populate: '*',
      filters: {
        slug: {
          $eq: slug,
        },
      },
    });
    const res = await axios.get(`${API_URL}/api/blogs?${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return res.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};
