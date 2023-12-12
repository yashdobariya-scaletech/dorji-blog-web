import { CalendarIcon } from "@/assets/icons/icon";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "./utils";

interface Props {
    articlesList: ArticleInfo[];
}
const BlogCard: React.FC<Props> = (props) => {
    return (
        <div className="cursor-pointer">
            <div className="blogs-wrapper full-width">
                {props.articlesList && props.articlesList.length > 0 ? (
                    <>
                        {props.articlesList?.map((item: any, index: number) => (
                            <div
                                key={index}
                                className="blog-content-wrapper position--relative"
                            >
                                <Link href={`article/${item.id}`}>
                                    <Image
                                        width={500}
                                        height={500}
                                        src={`http://192.168.1.97:1337${item.attributes.previewImage.data.attributes.url}`}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                        }}
                                        alt="Culture"
                                    />
                                    <div className="content-description-wrapper position--absolute full-height d-flex justify-content-space-between flex-direction--column full-width top--0 left--0">
                                        <div className="blog-type-wrapper full-width d-flex align-items-center justify-content-end">
                                            <p
                                                className="blog-type-text border-radius-10 font-weight--400 d-flex
                      align-items-center justify-content--center font-size-12"
                                            >
                                                {
                                                    item.attributes.categories
                                                        .data[0].attributes
                                                        .title
                                                }
                                            </p>
                                        </div>
                                        <div className="blog-title-date-wrapper">
                                            <h2 className="blog-title font-size-30 pl-10 pr-10 font-weight--800 line-height-40">
                                                {item.attributes.title}
                                            </h2>
                                            <div className="date-wrapper d-flex align-items-center justify-content--flex-start pl-10 pr-10">
                                                <div className="icon-date-time-wrapper d-flex align-items-center justify-content--center">
                                                    <CalendarIcon />
                                                    <p className="date-text font-size-16 font-weight--400">
                                                        {formatDate(
                                                            item.attributes
                                                                .createdAt
                                                        )}
                                                    </p>
                                                    /
                                                    <p className="reade-time-text ">
                                                        {
                                                            item.attributes
                                                                .readTime
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
};

export default BlogCard;
