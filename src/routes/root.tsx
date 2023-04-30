import Button from '@/components/ui/atoms/Button/Button';

export default function Root() {
  return (
    <>
      <Button
        text="카카오톡으로 로그인"
        onClick={() => ''}
        variant="kakao"
        size="medium"
        isLoading={false}
      />
      <Button
        text="언제더라.."
        onClick={() => ''}
        variant="answer"
        size="large"
        isLoading={false}
      />
      <Button
        text="이전"
        onClick={() => ''}
        size="small"
        variant="before"
        isLoading={false}
      />
      <Button
        text="다음"
        onClick={() => ''}
        size="small"
        variant="next"
        isLoading={false}
      />
      <Button
        text="다음"
        onClick={() => ''}
        size="small"
        variant="next"
        isLoading={true}
      />
    </>
  );
}
