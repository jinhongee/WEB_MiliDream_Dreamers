//index.js가 홈페이지의 HOME이다.

//만약 로그인상태에서 시작하기를 누른다면 개인정보 창으로 가도록
import Link from "next/link";
import { Router } from "next/router";
import NavBar from "../component/NavBar";
export default function Home() {
  return (
    <div className="a">
      <div className="Home_home">
        <Link href="/login">
          <button>시작하기</button>
        </Link>

        {/* 가장 위 position으로 전체 위치 조절가능 */}
        <div style={{ position: "relative", top: "300px", left: "50px" }}>
          <img class="front" src="/img/home/intro_2.svg" />
          <div style={{ position: "absolute", top: "-320px", left: "140px" }}>
            <img class="back" src="/img/home/intro_1.svg" />
          </div>
          <div style={{ position: "absolute", top: "170px", left: "350px" }}>
            <img class="third" src="/img/home/intro_3.svg" />
          </div>
        </div>
        <div>
          <h1 style={{ position: "absolute", top: "300px", left: "300px" }}>
            MILI-DREAM
          </h1>
        </div>
        <style jsx>
          {`
            .back {
              top: 50px;
              left: 50px;
            }
            .third {
              position: absolute;
              top: 0px;
              left: 400px;
            }
            button {
              position: absolute;
              background-color: #566270;
              color: white;
              cursor: pointer;
              border-radius: 40px 40px;
              border: 0;
              top: 300px;
              left: 1000px;
              outline: 0;
              box-shadow: 0 6px 6px -6px black;
              font-weight: bold;
              font-size: 25px;
              width: 180px;
              height: 62px;
            }
            button:hover {
              // 호버 시 색변환 천천히 주는거 넣을 예정
              background-color: #8a939c;
              transition-duration: 2ms;
              transition-delay: 2ms;
            }
            .Home_home {
              width: 100vw;
              height: 85vh;
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              background-color: #808994;
            }
            h1 {
              color: white;
            }
          `}
        </style>
      </div>
    </div>
  );
}

//STYLE JSX 써서 HOME 이미지 넣는다.
