import fetcher from "../fecther";

const signOut = async () => {
  try {
    const response = await fetcher.delete<ResponseContainer<string>>("/user");
    if (response.status !== 200) throw new Error("회원탈퇴에 실패했습니다.");

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default {
  signOut,
};
