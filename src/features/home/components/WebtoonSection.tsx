// features/home/components/WebtoonSection.tsx
// 사주 웹툰을 출력하는 컴포넌트
export default function WebtoonSection() {
  return (
    <>
      <div className="relative">
        <img src="/bg1.png" alt="Background1" className="w-full h-auto" />
        <p className="speech-bubble top-[89.5%] left-[35.5%]">
          이제 본격적으로
          <br />
          OO님의 사주팔자를
          <br />
          분석해볼 차례네요.
        </p>
      </div>
      <div>
        <img src="/bg2.png" alt="Background2" className="w-full h-auto" />
      </div>
      <div className="relative -mt-[20%]">
        <img src="/bg3.png" alt="Background3" className="w-full h-auto" />
        <p className="speech-bubble top-[18%] left-[38%]">
          제가 oo님의 사주를
          <br />
          보기 쉽게 표로 정리했어요
        </p>
      </div>
    </>
  );
}
