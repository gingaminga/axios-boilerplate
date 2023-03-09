import Bored from './api/bored';
import url from './api/url';

interface IActivityData {
  activity: string;
  accessibility: number;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
}

// 아래는 사용법을 보여주는 샘플 로직입니다.
(async () => {
  try {
    console.log('***** 어떤 활동을 해볼까? *****');

    const { data } = await Bored.getInstance().get<undefined, IActivityData>(url.BORED.PATH.ACTIVITY);

    console.log(`이게 좋겠네요 :) '${data.activity}'`);
  } catch (error) {
    console.error(error);
  }
})();
