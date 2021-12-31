export interface FragmentCategory {
  id: string;
  attributes: CategoryAttributes;
}

export interface RootCategory {
  data: FragmentCategory[];
}

export interface CategoryAttributes {
  category_name: string;
  createdAt: Date;
  updatedAt: Date;
  locale: string;
}

export interface FragmentBlogs {
  id: string;
  attributes: BlogAttributes;
}

export interface BlogAttributes {
  name: string;
  description: string;
  date: Date;
  slug: string;
  [key: string]: any;
}

export interface AboutUs {
  id: number;
  attributes: AboutUsAttributes;
}

export interface AboutUsAttributes {
  description: string;
}
