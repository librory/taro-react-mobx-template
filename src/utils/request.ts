import Taro from "@tarojs/taro";

export const get = async (url, params, options) => {
  const res = await Taro.request({
    url: url, //仅为示例，并非真实的接口地址
    data: params,
    method: "GET",
    header: {
      "content-type": "application/json", // 默认值
    },
    timeout: 3000, // 默认超时时间是2000，先设置成3000，避免后续定位不到问题
  });

  return res;
};

export const post = async (url, params, options) => {
  const res = await Taro.request({
    url: url, //仅为示例，并非真实的接口地址
    data: params,
    method: "POST",
    header: {
      "content-type": "application/json", // 默认值
    },
    timeout: 3000, // 默认超时时间是2000，先设置成3000，避免后续定位不到问题
  });

  return res;
};
