#!/bin/bash
# BlackWhite 主题打包脚本

echo "开始打包 BlackWhite 主题..."

# 主题信息
THEME_NAME="blackwhite-theme"
VERSION="1.0.0"
ARCHIVE_NAME="${THEME_NAME}-${VERSION}.tar.gz"

# 创建临时目录
TEMP_DIR=$(mktemp -d)
echo "临时目录: $TEMP_DIR"

# 复制主题文件
echo "复制主题文件..."
cp -r blackwhite-theme "$TEMP_DIR/"

# 移除不需要的文件
rm -rf "$TEMP_DIR/blackwhite-theme/node_modules"
rm -rf "$TEMP_DIR/blackwhite-theme/dist"
rm -rf "$TEMP_DIR/blackwhite-theme/.astro"

# 创建压缩包
echo "创建压缩包..."
cd "$TEMP_DIR"
tar -czf "$ARCHIVE_NAME" blackwhite-theme/
cd - > /dev/null

# 移动压缩包到当前目录
mv "$TEMP_DIR/$ARCHIVE_NAME" ./

# 清理临时目录
rm -rf "$TEMP_DIR"

echo "✅ 打包完成！"
echo "压缩包: $ARCHIVE_NAME"
echo ""
echo "解压命令:"
echo "  tar -xzf $ARCHIVE_NAME"
echo ""
echo "配置步骤:"
echo "  1. 解压: tar -xzf $ARCHIVE_NAME"
echo "  2. 进入目录: cd blackwhite-theme"
echo "  3. 安装依赖: npm install"
echo "  4. 启动开发: npm run dev"
