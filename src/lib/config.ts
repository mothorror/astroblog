import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

interface SiteConfig {
  site: {
    title: string;
    description: string;
    keywords: string;
    author: string;
  };
  background: {
    mode: 'png' | 'mp4' | 'player';
    player: {
      enabled: boolean;
      container_id: string;
      user_id: number;
      vcode: string;
      auto_play: boolean;
    };
    png: {
      url: string;
      opacity: number;
      size: string;
      position: string;
      attachment: string;
    };
    mp4: {
      url: string;
      opacity: number;
      autoplay: boolean;
      loop: boolean;
      muted: boolean;
    };
  };
  header: {
    title: string;
    subtitle: string;
  };
  navigation: Array<{
    name: string;
    url: string;
  }>;
  footer: {
    copyright: string;
    powered_by: string;
  };
  search: {
    enabled: boolean;
    placeholder: string;
  };
  features: {
    back_to_top: boolean;
    pace_loading: boolean;
    code_highlight: boolean;
    lazy_load_images: boolean;
  };
}

let configCache: SiteConfig | null = null;

export function loadConfig(): SiteConfig {
  if (configCache) {
    return configCache;
  }

  try {
    const configPath = path.join(process.cwd(), 'site-config.yaml');
    const fileContents = fs.readFileSync(configPath, 'utf8');
    const config = yaml.load(fileContents) as SiteConfig;
    configCache = config;
    return config;
  } catch (e) {
    console.error('Error loading site-config.yaml:', e);
    return getDefaultConfig();
  }
}

function getDefaultConfig(): SiteConfig {
  return {
    site: {
      title: "Xiting's Blog",
      description: '黑果小兵,daliansky,blog.daliansky.net,macOS,Hackintosh,黑苹果,linux',
      keywords: 'daliansky,黑果小兵,macOS,Hackintosh,黑苹果,linux,blog.daliansky.net',
      author: 'xiting'
    },
    background: {
      mode: 'png',
      player: {
        enabled: false,
        container_id: '',
        user_id: 0,
        vcode: '',
        auto_play: true
      },
      png: {
        url: 'https://a1.boltp.com/2026/05/06/69fb579073a05.png',
        opacity: 0.85,
        size: 'cover',
        position: 'center',
        attachment: 'fixed'
      },
      mp4: {
        url: '',
        opacity: 0.85,
        autoplay: true,
        loop: true,
        muted: true
      }
    },
    header: {
      title: "Xiting's Blog",
      subtitle: 'Stay Hungry, Stay Foolish'
    },
    navigation: [
      { name: '首页', url: '/' },
      { name: '归档', url: '/archive' },
      { name: '分类', url: '/categories' },
      { name: '标签', url: '/tags' },
      { name: '关于', url: '/about' }
    ],
    footer: {
      copyright: '© 2024 Xiting. All rights reserved.',
      powered_by: 'Astro'
    },
    search: {
      enabled: true,
      placeholder: '搜索文章...'
    },
    features: {
      back_to_top: true,
      pace_loading: true,
      code_highlight: true,
      lazy_load_images: false
    }
  };
}

export function getConfig(): SiteConfig {
  if (typeof window !== 'undefined') {
    return (window as any).__SITE_CONFIG__ || getDefaultConfig();
  }
  return loadConfig();
}
