interface PreviewImage {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

interface Category {
  data: {
    id: number;
    attributes: {
      title: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

interface Attributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  readTime: string;
  tags: string;
  description: string;
  featured: boolean;
  previewImage: PreviewImage;
  categories: {
    data: Category[];
  };
}

interface ArticleInfo {
  id: number;
  attributes: Attributes;
}
