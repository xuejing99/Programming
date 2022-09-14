# TypeScript Tutorial
## 1. How to Run TypeScript in WebStorm
1.1. Install typescript  
```
npm i typescript -D
```

1.2. Install ts-node  
```
npm i ts-node -D
```

1.3 Configure Webstorm  
1.3.1 Open the Run/Debug Configurations tab  
1.3.2 In Node.js run configuration, specify "--require ts-node/register" as "Node Parameters"
```
--require ts-node/register
```
1.3.3 Specify the script to run as "JavaScript file"  
