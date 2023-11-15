import Weeklydate from "@/components/main/Weeklydate";
import React from "react";
import { useEffect, useState } from 'react';

import { testData } from '@/components/Anony/testData';
import MyRetro from "@/components/Retro/MyRetro";
import MyRetroList from "@/components/Retro/MyRetroList";

const index = () => {
  const date = 16;
  const month = 'Oct';
  const title = '알잘딱깔센 알찬 하루 보냈다.';
  const memoir_keep = '오늘은 회의도 2번이나 했고, 디벨롭 하려고 했던 아이디어를 잘 발전시킨 것 같아서 뿌듯?';
  const memoir_problem = '한가지 아쉬웠던 부분은 원래 운동하려고 했는데 못했다는 점.. 정말 물리적 시간이 부족했음';
  const memoir_try = '일단 오늘 못했던 운동을 정말 많이 할거고, 먼저 할당된 과제들을 내일 중으로 끝내는 게 목표';
  const tag1 = '# 운동';
  const tag2 = '# 시간관리';
  const tag3 = '# 기획';
  const memoir_id = 12;

  const onCardClick = (memoirId) => {
    console.log('onCardClick :', memoirId);
  }

  const onEditClick = (memoirId) => {
    console.log('onEditClick :', memoirId);
  }

  <>
  {/* <KPT/> */}
  <MyRetroList
    memoirId={memoir_id}
    date={date}
    month={`${month}.`}
    todayTitle={title}
    onCardClick={onCardClick}
    onEditClick={onEditClick}
  />
  <MyRetro 
    // memoirId={memoir_id}
    date={date}
    month={`${month}.`}
    todayTitle={title}
    memoir_keep={memoir_keep}
    memoir_problem={memoir_problem}
    memoir_try={memoir_try}
    tag1={tag1}
    tag2={tag2}
    tag3={tag3}
  />
</>
  return (
    <div className="w-screen h-screen flex flex-col justify-start items-center px-[30px]">
      <Weeklydate />
    </div>
  );
};

export default index;
