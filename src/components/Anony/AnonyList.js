import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import '../../styles/swiper.scss';
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import AnonyRetro from "../../components/Anony/AnonyRetro";
import AnonyCommentInsert from "../../components/Anony/AnonyCommentInsert";
import { testData } from "./testData";
import dayjs from "dayjs";
import axios from 'axios';

export default function AnnoyList() {
	const [list, setList] = useState(testData);
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	const onDetailOpen = () => {
		setIsDetailOpen(true);
	};

	const onDetailClose = () => {
		setIsDetailOpen(false);
	};

	const getAnonyList = () => {
		axios.get(`/anony-memoir`)
			.then(res => {
				setList(res.data);
			})
	};

	useEffect(() => {
		getAnonyList();
	}, [])

	return (
		<div className={"anonyList"}>
			<div className={isDetailOpen ? "wrapper-detail" : "wrapper"}>
				<Swiper
					effect={"cards"}
					// oneWayMovement={true}
					grabCursor={true}
					modules={[EffectCards]}
					direction={"vertical"}
					cardsEffect={{
						perSlideOffset: 10,
						rotate: false,
						slideShadows: false,
					}}
				// className={swiperStyle.mySwiper}
					onActiveIndexChange={(swiper) => setActiveIndex(swiper.activeIndex)}
				>
					{list.map((item, index) => {
						const created = dayjs(item.created_at);
						const date = created.format("DD");
						const month = created.format("MMM");

						return (
							<>
								<SwiperSlide key={index}>
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
						);
					})}
				</Swiper>
			</div>
			<AnonyCommentInsert 
				userId={22}
				memoirId={list[activeIndex].memoir_id}
				isDetail={isDetailOpen}
				getAnonyList={getAnonyList}
			/>
		</div>
	);
}
