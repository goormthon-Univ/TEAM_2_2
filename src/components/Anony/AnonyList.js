"use client"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../styles/swiper.scss';
import "swiper/css";
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import AnonyRetro from '../../components/Anony/AnonyRetro';
import AnonyCommentInsert from '../../components/Anony/AnonyCommentInsert';
import { testData } from './testData';
import dayjs from 'dayjs';


export default function AnnoyList() {
	const [list, setList] = useState(testData);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const onDetailOpen = () => {
		setIsDetailOpen(true);
	}

	const onDetailClose = () => {
		setIsDetailOpen(false);
	}

	const renderDetail = () => {
		const item = list[selectedMemoirIdx];
		const created = dayjs(item.created_at);
		const date = created.format('DD');
		const month = created.format('MMM');

		return (
			<AnonyRetro
				memoirId={item.memoir_id}
				date={date}
				month={`${month}.`}
				todayTitle={item.title}
				comments={item.comments}
				totalLikes={item.total_like}
				totalComments={item.total_comment}
				onDetailOpen={() => onDetailOpen(index)}
				onDetailClose={onDetailClose}
				isDetail={isDetailOpen}
			/>
		)
	}

	return (
		<div className={'anonyList'}>
			<div className={isDetailOpen ? 'wrapper-detail' : 'wrapper'}>
						<Swiper
							effect={'cards'}
							// oneWayMovement={true}
							grabCursor={true}
							modules={[EffectCards]}
							direction={'vertical'}
							cardsEffect={{
								perSlideOffset: 10,
								rotate: false,
								slideShadows: false,
							}}
						// className={swiperStyle.mySwiper}

						>
							{
								list.map((item, index) => {
									const created = dayjs(item.created_at);
									const date = created.format('DD');
									const month = created.format('MMM');

									return (
										<>
											<SwiperSlide key={index} >
												<div>
													<AnonyRetro
														memoirId={item.memoir_id}
														date={date}
														month={`${month}.`}
														todayTitle={item.title}
														comments={item.comments}
														totalLikes={item.total_like}
														totalComments={item.total_comment}
														onDetailOpen={onDetailOpen}
														onDetailClose={onDetailClose}
													/>
												</div>
											</SwiperSlide>
										</>
									)
								})
							}
						</Swiper>
			</div>
			<AnonyCommentInsert isDetail={isDetailOpen} />
		</div>
	)
}