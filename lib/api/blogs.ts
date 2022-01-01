import axios from 'axios';
import { API_URL, TOKEN } from '../config';
import qs from 'qs';

export const getBlogs = async () => {
  try {
    const query = qs.stringify({
      populate: '*',
      sort: ['id:desc'],
      pagination: {
        page: 1,
        perPage: 6,
      },
    });

    const response = await axios.get(`${API_URL}/api/blogs?${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getImages = async () => {
  try {
    const query = qs.stringify({
      populate: '*',
      limit: 10,
      _sort: ['id::asc'],
    });

    const response = await axios.get(`${API_URL}/api/upload/files?${query}`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

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
      pagination: {
        page: 1,
        perPage: 6,
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
