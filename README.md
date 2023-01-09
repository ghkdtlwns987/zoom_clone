# 오픈소스 SW프로젝트 20184327 황시준

# WebRTC  
20184327 황시준 오픈소스 SW프로젝트 중간발표 소스

### 진행 사항
- 라우팅 기능 추가
	
### 기존 소스와의 차별점
- 기존 소스에서는 단순히 zoom 기능인 화상통화 기능만 내포
- localhost 사용자만 접속이 가능.
- 화상채팅이라고 하지만 자기 화면만 띄울 수 있는 환경(NAT로 내부망 구성이 되었다고 해도 접속할 수 없음)

2. socket.io와 IceCandidate를 통해 동시 접속을 허용함.

3. TLS 암호화 프로토콜 적용으로 다른 사용자의 접속을 가능하게 함. 
![image](https://user-images.githubusercontent.com/54488922/211372582-fcc942d8-6120-4375-a0b8-4c06767b0062.png)


### Setup
``` javascript
npm install
```

### Start
``` javascript
node index.js
```
