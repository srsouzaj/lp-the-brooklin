import { DiscoveriesCard } from "../../../../components/cards/discoveries"
import { Typography } from "../../../../components/Typography"
import BGGramma from "../../../../assets/bg-gramma.png"
import BGRunning from "../../../../assets/bg-running.png"
import BGWater from "../../../../assets/bg-water.png"
import "./styles.css"

export const DiscoverSection = () => {

    return (
        <div className="discover-container">
            <Typography content="keep up to date with our discoveries" type="heading" />

            <div className="card-list-discover">
                <DiscoveriesCard imageSrc={BGGramma} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                <DiscoveriesCard imageSrc={BGRunning} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
                <DiscoveriesCard imageSrc={BGWater} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} />
            </div>


            <div className='btn-discover'>see more</div>
        </div>
    )
}