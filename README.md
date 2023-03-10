# axios boilerplate

자주 사용하는 라이브러리인 `axios`를 모듈화해서 사용해요.<br/>
보일러플레이트를 만들어 해당 라이브러리를 사용하는 다양한 프로젝트에 적용하기 위해 분리하게 되었습니다. :)

## 😯어떻게 쓰나요?

테스트는 아래처럼 해보세요.

```bash
# 로컬로 다운받기
$ git clone https://github.com/gingaminga/axios-boilerplate.git

# 다운받은 경로로 이동
$ cd axios-bolierplate

# 라이브러리 설치
$ npm install

# 샘플 로직 돌려보기
$ npm run dev
```

![axios-boilerplate-exec](https://user-images.githubusercontent.com/60294629/224063991-ec84663e-b1c4-48c4-98b9-2269f0d8fc91.gif)

## 📁폴더 및 파일 설명

- `src` : 실제 코드가 들어있는 폴더
  - `api`
    - `bored.ts` : utils/axios.ts를 사용하여 open API를 모듈화한 파일
    - `url.ts` : open API의 호출 정보를 저장한 파일
  - `utils`
    - `axios.ts` : axios를 모듈화한 파일
  - `index.ts` : api/bored.ts를 사용하여 실제 호출 테스트를 한 파일
