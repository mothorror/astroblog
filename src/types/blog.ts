/**
 * 博客相关类型定义
 */

/**
 * 文章元数据接口
 */
export interface PostMetadata {
  title: string;
  pubDate: Date;
  updatedDate?: Date;
  description: string;
  category?: string;
  tags?: string[];
  backgroundImage?: string;
  status?: 'published' | 'draft';
}

/**
 * 文章数据接口
 */
export interface PostData extends PostMetadata {
  slug: string;
  content: string;
  wordCount: number;
  readingTime: number;
}

/**
 * 分类/标签统计接口
 */
export interface TaxonomyItem {
  name: string;
  slug: string;
  count: number;
  url: string;
}

/**
 * 分页信息接口
 */
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPageUrl?: string;
  nextPageUrl?: string;
}

/**
 * 导航文章接口
 */
export interface NavigationPost {
  id: string;
  title: string;
  url: string;
}

/**
 * 文章列表项接口
 */
export interface PostListItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  category?: string;
  tags?: string[];
  backgroundImage?: string;
  wordCount?: number;
  readingTime?: number;
}

/**
 * SEO 元数据接口
 */
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
}

/**
 * 评论配置接口
 */
export interface CommentConfig {
  enabled: boolean;
  provider: 'giscus' | 'utterances' | 'disqus' | 'custom';
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
  theme?: string;
  lang?: string;
}

/**
 * 站点配置接口
 */
export interface SiteConfig {
  title: string;
  description: string;
  author: string;
  url: string;
  ogImage: string;
  locale: string;
}

/**
 * 面包屑导航项接口
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
  current?: boolean;
}

/**
 * 侧边栏配置接口
 */
export interface SidebarConfig {
  showCategories: boolean;
  showTags: boolean;
  showRecentPosts: boolean;
  recentPostsCount: number;
}

/**
 * 文章搜索结果接口
 */
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  relevance: number;
}

/**
 * 主题配置接口
 */
export interface ThemeConfig {
  name: 'muse' | 'mist' | 'pisces' | 'gemini';
  darkMode: boolean;
  highlightTheme: string;
  font: {
    body: string;
    heading: string;
    code: string;
  };
}

/**
 * 资源下载项接口
 */
export interface ResourceItem {
  name: string;
  version?: string;
  description: string;
  downloadUrl: string;
  publishDate: Date;
  size?: number;
  icon?: string;
}

/**
 * 通用响应接口
 */
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

/**
 * 分页响应接口
 */
export interface PaginatedResponse<T> {
  items: T[];
  pagination: PaginationInfo;
}
