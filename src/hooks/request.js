const request = async (url, method = "GET", body = null) => {
  const baseURI = "https://tco-dev.evrazsteelbuilding.ru/api/";
  try {
    const response = await fetch(`${baseURI}${url}`, {
      method,
      body,
      headers: {
        Authorization: "Token 63ab652db85025784db873bcd17904932e4f97a2",
      },
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data;
  } catch (err) {
    throw new Error(err);
  }
};

export default request;
