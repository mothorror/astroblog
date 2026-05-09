/**
 * 通用工具函数
 */

/**
 * 格式化日期为中文格式
 */
export function formatDate(
  date: Date | string | number,
  format: 'long' | 'short' | 'full' = 'long'
): string {
  try {
    const dateObj = typeof date === 'object' ? date : new Date(date);

    if (isNaN(dateObj.getTime())) {
      return '';
    }

    const options = {
      long: {
        year: 'numeric' as const,
        month: 'long' as const,
        day: 'numeric' as const,
      },
      short: {
        year: 'numeric' as const,
        month: '2-digit' as const,
        day: '2-digit' as const,
      },
      full: {
        year: 'numeric' as const,
        month: 'long' as const,
        day: 'numeric' as const,
        hour: '2-digit' as const,
        minute: '2-digit' as const,
      },
    };

    return dateObj.toLocaleDateString('zh-CN', options[format]);
  } catch {
    return '';
  }
}

/**
 * 安全地解码 URI 组件
 */
export function safeDecodeURIComponent(str: string): string {
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
}

/**
 * 截断文本到指定长度
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * 计算阅读时间（分钟）
 */
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200; // 中文每分钟阅读字数
  const wordCount = text.trim().length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * 格式化数字
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * 生成随机字符串
 */
export function generateId(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * 检查是否为有效的 URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * 延迟执行
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * 安全的 JSON 解析
 */
export function safeJsonParse<T>(json: string, defaultValue: T): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return defaultValue;
  }
}

/**
 * 数组去重
 */
export function uniqueArray<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

/**
 * 对象键值排序
 */
export function sortObjectKeys<T extends Record<string, any>>(obj: T): T {
  return Object.keys(obj)
    .sort()
    .reduce((result, key) => {
      (result as any)[key] = obj[key];
      return result;
    }, {} as T);
}
