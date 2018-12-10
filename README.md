## 前端种子项目脚手架

### 安装
```sh
npm install -g feseed-cli

# OR

yarn global add feseed-cli
```

### 使用
```sh
fes list  # 查看所有可用种子项目模板

fes init <template-name> <project-name>
```

举个 :chestnut:
```sh
fes init pos my-project
```

### 自定义

```sh
# 查看自定义用户名或组织名下可用项目列表
fes list <username>

# 下载自定义模板
fes init <username>/<repo> my-project
```
