import React, {FC} from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
    finalPrice:number;
    countGoodsInBasket: number;
    testid: string;
};

const Header: FC<HeaderProps> = ({finalPrice, countGoodsInBasket, testid}) => {

    return (
        <div data-testid={testid}>
            <section className="header-top">
                <div className="container header-top__container">
                    <div className="header-top__left">
                        <div className="header-top__block">
                            <svg className="header-top__img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M9.99967 1.66675C8.23156 1.66675 6.53587 2.36913 5.28563 3.61937C4.03539 4.86961 3.33301 6.5653 3.33301 8.33342C3.33301 9.91008 3.66801 10.9417 4.58301 12.0834L9.99967 18.3334L15.4163 12.0834C16.3313 10.9417 16.6663 9.91008 16.6663 8.33342C16.6663 6.5653 15.964 4.86961 14.7137 3.61937C13.4635 2.36913 11.7678 1.66675 9.99967 1.66675V1.66675Z" stroke="#3F4E65" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            <div className="header-top__body">
                                <p className="header-top__address">г. Кокчетав, ул. Ж. Ташенова 129Б </p>
                                <p className="header-top__additional">(Рынок Восточный)</p>
                            </div>
                        </div>
                        <div className="header-top__block">
                            <svg className="header-top__img" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.37533 0.333252H14.6253C15.3171 0.333207 15.9827 0.59788 16.4855 1.07298C16.9884 1.54808 17.2903 2.19758 17.3295 2.88825L17.3337 3.04158V10.9583C17.3337 11.65 17.069 12.3156 16.5939 12.8184C16.1188 13.3213 15.4693 13.6233 14.7787 13.6624L14.6253 13.6666H3.37533C2.68354 13.6666 2.01797 13.402 1.51513 12.9269C1.0123 12.4518 0.710324 11.8023 0.671159 11.1116L0.666992 10.9583V3.04158C0.666947 2.3498 0.931621 1.68423 1.40672 1.18139C1.88182 0.678558 2.53132 0.376584 3.22199 0.337419L3.37533 0.333252H14.6253H3.37533ZM16.0837 4.81075L9.29199 8.38575C9.21531 8.42626 9.13102 8.45037 9.04451 8.45654C8.958 8.46271 8.87115 8.4508 8.78949 8.42159L8.70949 8.38658L1.91699 4.81158V10.9583C1.91701 11.3242 2.05463 11.6768 2.30256 11.9461C2.55048 12.2153 2.89058 12.3815 3.25533 12.4116L3.37533 12.4166H14.6253C14.9915 12.4166 15.3442 12.2788 15.6134 12.0307C15.8827 11.7826 16.0487 11.4423 16.0787 11.0774L16.0837 10.9583V4.81075ZM14.6253 1.58325H3.37533C3.00933 1.58327 2.65673 1.72089 2.3875 1.96882C2.11827 2.21674 1.95211 2.55683 1.92199 2.92159L1.91699 3.04158V3.39908L9.00033 7.12659L16.0837 3.39825V3.04158C16.0836 2.67546 15.9459 2.32274 15.6978 2.0535C15.4497 1.78425 15.1094 1.61817 14.7445 1.58825L14.6253 1.58325Z" fill="#3F4E65"/></svg>
                            <div className="header-top__body">
                            <a href="mailto:opt.sultan@mail.ru" className="header-top__mail">opt.sultan@mail.ru</a>
                            <p className="header-top__additional">На связи в любое время</p>
                        </div>
                        </div>
                    </div>
                    <div className="header-top__right">
                        <ul className="header-top__list">
                            <li className="header-top__item">
                                <a href="" className="header-top__link">О компании</a>
                            </li>
                            <li className="header-top__item">
                                <a href="" className="header-top__link">Доставка и оплата</a>
                            </li>
                            <li className="header-top__item">
                                <a href="" className="header-top__link">Возврат</a>
                            </li>
                            <li className="header-top__item">
                                <a href="" className="header-top__link">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="header-down">
                <div className="container header-down__container">
                        <div className="header-down__block ">
                            <svg className="header-down__icon_menu" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#FFC85E"/><path d="M11.7998 16.5999H20.1998V15.3999H11.7998V16.5999ZM11.7998 19.5999H20.1998V18.3999H11.7998V19.5999ZM11.7998 12.3999V13.5999H20.1998V12.3999H11.7998Z" fill="white"/></svg>
                        </div>
                    <div className="header-down__block header-down__block_logo">
                        <svg className="header-down__logo" width="156" height="66" viewBox="0 0 156 66" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_6154_674)"><path d="M48.513 24.6743C48.4887 21.1069 47.3262 17.6401 45.1945 14.7779C45.166 14.7184 45.1263 14.665 45.0775 14.6205C43.6528 12.7179 41.9212 11.0654 39.9534 9.73077C39.902 9.68971 39.8478 9.65214 39.7913 9.61832C36.7412 7.58887 33.3044 6.21058 29.6963 5.56979H29.6513C29.6277 5.56304 29.6028 5.56304 29.5792 5.56979C28.6787 5.39885 27.7106 5.27739 26.756 5.19642C26.684 3.20815 26.2742 1.98009 25.7925 1.21537C25.6452 0.932775 25.4413 0.6835 25.1934 0.483059C24.9455 0.282618 24.659 0.135304 24.3516 0.050293H24.23H24.149C23.8411 0.135495 23.5541 0.282842 23.3055 0.48323C23.0569 0.683619 22.852 0.932792 22.7036 1.21537C22.2173 1.98009 21.8031 3.21264 21.74 5.20092C12.379 5.99263 4.58482 11.1073 1.47797 18.0258C1.46026 18.0621 1.44521 18.0997 1.43294 18.1382C0.514142 20.2046 0.0386646 22.4403 0.0371094 24.7013C0.0371094 30.0589 2.64416 35.0476 7.38549 38.7677C7.06053 40.8612 7.26326 43.0025 7.97534 44.998C6.85867 48.5966 5.86808 53.1895 7.7502 57.0941C7.75102 57.106 7.75102 57.1181 7.7502 57.13C9.9205 61.5834 14.171 62.789 18.282 63.9496C20.2389 64.4245 22.1438 65.092 23.9689 65.9423L24.0319 65.9693H24.0724C24.1144 65.9737 24.1566 65.9737 24.1985 65.9693H24.2661C24.3478 65.9702 24.4284 65.9501 24.5002 65.9109C26.3257 65.051 28.2322 64.3744 30.1916 63.8911C32.533 63.2298 34.9239 62.5416 36.9456 61.2685L37.0042 61.228C38.6115 60.2207 39.9008 58.7798 40.7234 57.0716C42.628 53.1625 41.6239 48.6281 40.5703 45.1149C40.5628 45.0903 40.5505 45.0674 40.5343 45.0474C41.6059 42.4474 41.3087 39.6494 41.1691 38.7137C45.906 35.0116 48.513 30.0319 48.513 24.6743ZM47.4999 24.6743C47.4989 26.1297 47.2912 27.5777 46.883 28.9748C46.1632 27.5083 45.2368 26.1526 44.1319 24.9487C42.0832 22.6996 38.4585 19.9241 32.578 18.8355C36.4358 17.3638 40.4252 16.2627 44.4921 15.5472C46.4222 18.2021 47.4738 21.3931 47.4999 24.6743ZM43.8212 14.643C38.5354 15.5937 33.3914 17.2094 28.5121 19.4517C28.1969 16.9012 27.0622 14.8949 25.5583 14.1617C25.6079 13.9817 25.6484 13.8108 25.6889 13.6398C30.1626 12.1384 34.7849 11.122 39.4761 10.608C41.1117 11.7366 42.5752 13.0957 43.8212 14.643ZM37.9272 47.1122L37.657 47.3506C36.6925 48.1046 35.5578 48.6111 34.3521 48.8261H34.2935H34.199H34.172C31.655 49.2759 28.395 48.9385 24.4281 47.7734H24.3741H24.176H24.1355C22.3286 48.3251 20.4746 48.7091 18.5972 48.9205H18.5161C14.9995 49.2624 12.3519 48.6416 10.6094 47.0492C8.58771 45.2859 8.20948 42.5194 8.20948 40.648C9.06562 42.2584 10.3433 43.6064 11.9062 44.5481C14.4952 46.0776 17.7597 46.3475 21.6185 45.4073C21.8679 45.886 22.2443 46.2869 22.7065 46.5661C23.1687 46.8454 23.6989 46.9923 24.239 46.9907C24.7786 46.9925 25.3083 46.8456 25.7698 46.5663C26.2313 46.2869 26.6068 45.8859 26.8551 45.4073C30.7139 46.3654 33.9828 46.0776 36.5674 44.5481C38.1324 43.609 39.4107 42.2604 40.2641 40.648C40.3001 42.5194 39.9219 45.2858 37.9272 47.1122ZM35.6759 60.8907C33.9293 61.7531 32.0932 62.4214 30.2006 62.8834C29.3373 62.0651 28.5958 61.1274 27.9988 60.099C27.0982 58.484 27.5485 56.7072 28.2194 55.0248C28.332 54.7369 28.4671 54.4265 28.6111 54.1026C29.1605 52.8566 29.8179 51.3541 29.5927 49.9641C30.3309 50.0532 31.0735 50.0997 31.8171 50.1036C32.5634 50.1061 33.3087 50.0489 34.0459 49.9327C34.3296 50.7334 33.9243 52.1099 33.5596 53.3469C33.2496 54.2008 33.0631 55.0945 33.0058 56.0009C33.0046 56.9743 33.2486 57.9323 33.7152 58.7868C34.1818 59.6413 34.856 60.3648 35.6759 60.8907ZM24.2706 64.9392C23.5411 64.3994 21.0151 62.3167 20.5288 58.9114C20.0785 55.8165 21.4068 52.4517 24.4417 48.9025C25.7817 49.2857 27.1441 49.5861 28.5211 49.8022C28.8813 50.9448 28.2464 52.3888 27.6836 53.6708C27.535 54.0127 27.3954 54.3366 27.2784 54.6379C26.5354 56.5498 25.9996 58.592 27.1162 60.5758C27.6622 61.5216 28.3231 62.3965 29.0839 63.1803C27.4282 63.6203 25.8156 64.209 24.2661 64.9392H24.2706ZM36.0631 43.6934C33.6406 45.1239 30.4978 45.3398 26.7425 44.3412C26.6764 44.3193 26.6064 44.3114 26.537 44.318C26.4676 44.3245 26.4003 44.3453 26.3394 44.3791C26.2785 44.413 26.2252 44.459 26.183 44.5144C26.1408 44.5698 26.1105 44.6334 26.0941 44.7011C25.9612 45.0788 25.7136 45.4057 25.386 45.6363C25.0583 45.8669 24.6668 45.9897 24.2661 45.9876C23.862 45.9907 23.4673 45.8663 23.1382 45.632C22.8091 45.3977 22.5624 45.0656 22.4335 44.6831C22.4163 44.618 22.3859 44.5573 22.344 44.5046C22.3022 44.452 22.2498 44.4086 22.1903 44.3772C22.1259 44.3427 22.0552 44.3217 21.9824 44.3155C21.9096 44.3093 21.8363 44.318 21.7671 44.3412C18.0208 45.3353 14.8915 45.1194 12.4645 43.6934C10.5641 42.5211 9.14347 40.7112 8.45713 38.5878C8.86687 37.7601 10.8751 33.9994 15.3868 29.627C15.8685 29.3481 21.9922 26.0014 33.1543 29.654C37.6345 34.0039 39.6787 37.8051 40.0795 38.5923C39.3842 40.7102 37.9594 42.513 36.0586 43.6799L36.0631 43.6934ZM20.9521 20.8957C20.9521 18.3181 21.8931 16.051 23.1719 15.2188C23.311 15.1202 23.4624 15.04 23.6222 14.9804C23.7811 14.9205 23.948 14.8841 24.1175 14.8724H24.3066C24.4787 14.8764 24.649 14.9083 24.8109 14.9669C24.9696 15.0194 25.1209 15.092 25.2611 15.1828C26.4003 15.889 27.2828 17.7289 27.4855 19.9196C27.5205 20.2438 27.5371 20.5697 27.535 20.8957C27.535 20.9497 27.535 21.0082 27.535 21.0667C27.5273 21.9026 27.4122 22.7341 27.1928 23.5408C27.097 23.8757 26.9812 24.2047 26.8461 24.5259C26.2382 25.9699 25.2882 26.919 24.2345 26.919C23.1809 26.919 22.2308 25.9744 21.623 24.5304C21.4775 24.1953 21.3586 23.8494 21.2673 23.4958C21.0459 22.6471 20.9399 21.7726 20.9521 20.8957ZM22.0192 26.9415C20.4959 27.0102 18.9853 27.2516 17.5165 27.6613C18.4846 26.8381 19.5698 25.9879 20.7675 25.1332C21.0689 25.8083 21.4933 26.4215 22.0192 26.9415ZM26.3373 27.0855C26.9346 26.5408 27.4089 25.8753 27.7286 25.1332C29.0794 26.1093 30.3312 27.1035 31.4478 28.0796C29.7721 27.6188 28.0636 27.2865 26.3373 27.0855ZM25.9185 12.4883C26.3134 10.6926 26.5753 8.87035 26.702 7.03625C27.6025 6.86082 28.5256 6.69437 29.4757 6.54143C32.5196 7.09115 35.4411 8.17879 38.1028 9.75327C33.9646 10.2817 29.8853 11.1974 25.9185 12.4883ZM23.4826 1.80465C23.6487 1.47941 23.9072 1.21029 24.2255 1.03093C24.5428 1.21175 24.8008 1.48048 24.9685 1.80465C25.3017 2.36695 25.6439 3.36559 25.7159 5.08846C25.7159 5.40335 25.7159 5.74073 25.7159 6.10509V6.20855C25.7159 6.53694 25.6889 6.87881 25.6664 7.25667C25.5032 9.14738 25.2022 11.0237 24.7658 12.8706C24.6938 13.199 24.6218 13.5319 24.5407 13.8783C24.4365 13.862 24.331 13.8545 24.2255 13.8558C24.1021 13.8579 23.9788 13.8669 23.8563 13.8828C23.8068 13.6713 23.7528 13.4644 23.7077 13.253C23.2935 11.4973 22.9927 9.71673 22.8072 7.92243C22.7712 7.56256 22.7441 7.22069 22.7306 6.8968C22.7171 6.57292 22.7036 6.357 22.6991 6.10509C22.6991 5.74073 22.6991 5.40335 22.6991 5.09296C22.8072 3.36559 23.1539 2.36695 23.4826 1.80465ZM21.7175 6.17706C21.7175 6.48745 21.74 6.81583 21.7626 7.15321C12.5231 9.66329 6.80464 13.37 3.89591 15.7001C7.46203 10.5315 14.0315 6.85182 21.7175 6.17706ZM2.32447 18.5206C2.68018 18.1382 4.67937 16.069 8.62823 13.7118C12.7669 11.2886 17.2135 9.43357 21.8481 8.19683C22.0543 10.0254 22.37 11.84 22.7937 13.6309C17.7955 15.5443 13.1809 18.3369 9.16855 21.8764C5.11614 25.547 3.0539 28.9658 2.22091 30.6122C1.4126 28.6967 1.0052 26.6362 1.02379 24.5575C1.04237 22.4788 1.48655 20.4259 2.32897 18.5251L2.32447 18.5206ZM2.77474 31.7997C3.40511 30.3783 7.92131 21.1431 21.722 15.1558C20.6369 16.4243 19.9435 18.4981 19.9435 20.8912C19.9328 21.9782 20.0846 23.0608 20.3937 24.103C12.379 29.744 8.72729 35.8483 7.72319 37.7421C5.67813 36.1253 3.99152 34.1018 2.77024 31.7997H2.77474ZM8.62823 46.2935C8.98696 46.8681 9.41995 47.3929 9.91599 47.8544C10.7584 48.6155 11.7551 49.1863 12.8382 49.5278C11.7783 49.863 10.8041 50.4248 9.98354 51.1742C8.98106 52.1385 8.28431 53.3758 7.97984 54.7324C7.30894 51.9524 7.86277 48.9205 8.60572 46.2935H8.62823ZM8.72729 56.7702C9.01546 49.9686 15.3868 50.0721 15.6659 50.0811C15.7135 50.0828 15.7609 50.0751 15.8055 50.0586C16.1432 50.0586 16.4899 50.0856 16.8411 50.0586C14.7519 51.705 13.4866 53.6123 13.0814 55.749C12.7527 57.6744 13.0443 59.6544 13.9144 61.4035C11.7531 60.4813 9.89799 59.1453 8.70478 56.7702H8.72729ZM15.4138 61.9928C15.0401 61.4215 13.5272 58.8844 14.0945 55.947C14.5448 53.6663 16.1072 51.6555 18.7683 49.9686C20.1541 49.8197 21.5268 49.5671 22.8747 49.2129C20.2136 52.6452 19.0835 55.9605 19.5337 59.0553C19.8091 60.8538 20.5792 62.5404 21.7581 63.9271C20.6999 63.5582 19.6193 63.2523 18.5567 62.9509C17.494 62.6495 16.4089 62.3436 15.4138 61.9928ZM36.68 60.2699C35.8833 59.866 35.2141 59.2495 34.7468 58.4888C34.2794 57.7282 34.0322 56.853 34.0324 55.9605C34.0975 55.1602 34.2686 54.3721 34.5412 53.6168C34.9554 52.2313 35.3742 50.8053 35.0635 49.7167C35.8995 49.5136 36.7007 49.1877 37.4409 48.7496C37.4409 52.6317 39.5797 54.3006 40.4712 54.8314C40.3192 55.4659 40.1003 56.0827 39.8183 56.6712C39.1086 58.132 38.0183 59.3751 36.6619 60.2699H36.68ZM40.6828 53.7518C39.8048 53.1085 38.2559 51.4666 38.49 47.9804L38.6341 47.8544C39.1135 47.4149 39.5328 46.9143 39.8814 46.3654C40.5027 48.6416 41.0115 51.2507 40.6648 53.7518H40.6828ZM40.7954 37.7556C39.8093 35.8933 36.1711 29.8115 28.1158 24.148C28.4415 23.0949 28.6025 21.9979 28.5931 20.8957C28.5931 20.7878 28.5931 20.6753 28.5931 20.5718C29.3 20.23 30.0295 19.8971 30.7814 19.5867C37.3419 20.3694 41.2457 23.2799 43.3664 25.5965C44.6716 26.992 45.7026 28.6202 46.4057 30.3963C45.1941 33.292 43.2556 35.8267 40.7774 37.7556H40.7954Z" fill="#3F4E65"/><path d="M17.5294 35.9868C16.03 35.9868 14.6882 36.6436 14.1839 37.6242C14.1239 37.7437 14.1134 37.8819 14.1547 38.0091C14.196 38.1362 14.2858 38.242 14.4046 38.3035C14.476 38.3387 14.5545 38.3572 14.6342 38.3574C14.7273 38.3577 14.8186 38.3322 14.8981 38.2837C14.9776 38.2353 15.0421 38.1658 15.0845 38.083C15.4131 37.4443 16.4353 36.9944 17.5294 36.9944C18.6236 36.9944 19.6457 37.4443 19.9789 38.083C20.0089 38.1422 20.0504 38.1949 20.1008 38.238C20.1513 38.2812 20.2098 38.3139 20.273 38.3344C20.3362 38.3549 20.4028 38.3627 20.469 38.3574C20.5352 38.3521 20.5997 38.3338 20.6588 38.3035C20.7787 38.242 20.8693 38.1354 20.9107 38.0072C20.9521 37.879 20.9408 37.7396 20.8794 37.6197C20.3661 36.6436 19.0153 35.9868 17.5294 35.9868Z" fill="#3F4E65"/><path d="M30.9788 35.9868C29.4794 35.9868 28.1331 36.6436 27.6333 37.6242C27.6024 37.6831 27.5836 37.7476 27.578 37.8139C27.5723 37.8802 27.58 37.947 27.6006 38.0102C27.6211 38.0735 27.6541 38.132 27.6976 38.1824C27.7412 38.2328 27.7943 38.2739 27.854 38.3035C27.9254 38.3387 28.004 38.3572 28.0836 38.3574C28.1767 38.3577 28.268 38.3322 28.3475 38.2837C28.427 38.2353 28.4915 38.1658 28.5339 38.083C28.8626 37.4443 29.8847 36.9944 30.9788 36.9944C32.073 36.9944 33.0951 37.4443 33.4283 38.083C33.4583 38.1422 33.4998 38.1949 33.5503 38.238C33.6007 38.2812 33.6592 38.3139 33.7224 38.3344C33.7856 38.3549 33.8522 38.3627 33.9184 38.3574C33.9846 38.3521 34.0491 38.3338 34.1082 38.3035C34.2273 38.2411 34.3171 38.1345 34.3584 38.0066C34.3997 37.8788 34.389 37.7398 34.3288 37.6197C33.82 36.6436 32.4737 35.9868 30.9788 35.9868Z" fill="#3F4E65"/><path d="M63.8707 29.0774C67.1621 29.0774 70.7282 30.8767 71.3406 35.1097H67.3467C66.7794 33.4993 65.5727 32.7705 63.8707 32.7705C61.4887 32.7705 59.9218 34.5699 59.9218 37.1924C59.9218 39.5316 61.4662 41.5693 63.8707 41.5963C65.5997 41.5963 66.982 40.7327 67.4143 39.0323H71.4081C70.8183 43.5306 67.2567 45.2895 63.8707 45.2895C59.8182 45.312 55.7433 42.5905 55.7208 37.1924C55.6983 31.7944 59.8317 29.0774 63.8707 29.0774Z" fill="#3F4E65"/><path d="M77.7655 44.6959L80.2509 39.5767L74.9062 29.8513V29.2395H79.445L82.4437 35.0874H82.5563L85.2804 29.2395H89.7066V29.8513L82.1466 45.1457H77.7655V44.6959Z" fill="#3F4E65"/><path d="M94.7054 45.1455H90.7295V44.5562L97.8798 29.0684H99.6133L106.818 44.5427V45.1455H102.842L98.7578 35.8474L94.7054 45.1455Z" fill="#3F4E65"/><path d="M108.668 32.8875V29.2573H120.47V32.8875H116.588V45.1456H112.572V32.8875H108.668Z" fill="#3F4E65"/><path d="M133.5 43.1347H127.236L126.304 45.1455H122.333V44.5562L129.483 29.0684H131.23L138.403 44.5562V45.1455H134.432L133.5 43.1347ZM130.348 35.4875L128.547 39.662H132.18L130.348 35.4875Z" fill="#3F4E65"/><path d="M156 45.1456H151.844V38.7579H146.941V45.1456H142.789V29.2573H146.941V35.0152H151.844V29.2573H156V45.1456Z" fill="#3F4E65"/></g><defs><clipPath id="clip0_6154_674"><rect width="156" height="66" fill="white"/></clipPath></defs></svg>
                    </div>
                    <Link to='/catalog/' data-testid="catalog-link">
                        <div className="header-down__block header-down__block_btn">
                            <p className="header-down__btn-name">Каталог</p>
                            <svg className='header-down__img header-down__img_catalog' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="white"/><path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="white"/><path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="white"/><path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="white"/></svg>
                        </div>
                    </Link>
                    <div className="header-down__block header-down__block_input">
                        <input className="header-down__input" type="text" placeholder="Поиск..." />
                        <div className="header-down__btn">
                            <svg className="header-down__img header-down__img_search" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5294 16.5294L13.0989 13.0928L16.5294 16.5294ZM15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.5 15C6.77609 15 5.12279 14.3152 3.90381 13.0962C2.68482 11.8772 2 10.2239 2 8.5C2 6.77609 2.68482 5.12279 3.90381 3.90381C5.12279 2.68482 6.77609 2 8.5 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5V8.5Z" stroke="white" strokeWidth="1.3" strokeLinecap="round"/></svg>
                        </div>
                    </div>
                    <div className="header-down__block_cons">
                        <div className="header-down__internal">
                            <svg className="header-down__icon_call" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="30" rx="15" fill="#FFC85E"/><g clipPath="url(#clip0_144_5050)"><path d="M16.3531 16.7125L17.0531 16.0125C17.1474 15.9194 17.2667 15.8557 17.3965 15.829C17.5263 15.8024 17.6611 15.814 17.7844 15.8625L18.6375 16.2031C18.7621 16.2537 18.869 16.3401 18.9446 16.4513C19.0203 16.5625 19.0613 16.6936 19.0625 16.8281V18.3906C19.0618 18.4821 19.0426 18.5725 19.006 18.6564C18.9694 18.7403 18.9162 18.8159 18.8496 18.8786C18.7831 18.9414 18.7045 18.9901 18.6186 19.0217C18.5328 19.0533 18.4414 19.0672 18.35 19.0625C12.3719 18.6906 11.1656 13.6281 10.9375 11.6906C10.9269 11.5955 10.9366 11.4992 10.9659 11.408C10.9952 11.3169 11.0435 11.233 11.1075 11.1619C11.1716 11.0907 11.25 11.034 11.3376 10.9953C11.4251 10.9566 11.5199 10.9369 11.6156 10.9375H13.125C13.2597 10.9379 13.3912 10.9786 13.5026 11.0543C13.614 11.1301 13.7001 11.2374 13.75 11.3625L14.0906 12.2156C14.1407 12.3385 14.1535 12.4733 14.1274 12.6034C14.1012 12.7334 14.0374 12.8529 13.9438 12.9469L13.2438 13.6469C13.2438 13.6469 13.6469 16.375 16.3531 16.7125Z" fill="white"/></g><defs><clipPath id="clip0_144_5050"><rect width="10" height="10" fill="white" transform="translate(10 10)"/></clipPath></defs></svg>
                            <a href="tel:+77774900091" className="header-down__phone">+7 (777) 490-00-91</a>
                            <p className="header-down__additional">время работы: 9:00-20:00</p>
                            <a href="" className="header-down__order">Заказать звонок</a>
                        </div>
                        <div className="header-down__photo"></div>
                    </div>
                    <div className="header-down__block header-down__block_btn">
                        <p className="header-down__btn-name">Прайс-лист</p>
                        <svg className='header-down__img header-down__img_download' width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.958 6.375H11.1247V2.125H6.87467V6.375H4.04134L8.99967 12.0417L13.958 6.375ZM3.33301 13.4583H14.6663V14.875H3.33301V13.4583Z" fill="white"/></svg>            
                    </div>
                    <div className="header-down__block_basket">
                    <Link to='/basket' data-testid="basket-link">
                        <svg className="header-down__img header-down__img_basket" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M41.6514 13.7862C41.3916 13.4233 41.043 13.2418 40.6055 13.2418H12.7559L12 11.274C11.8086 10.6289 11.5488 10.0778 11.2207 9.6208C10.8926 9.16381 10.5439 8.84123 10.1748 8.65306C9.80566 8.46489 9.48438 8.3372 9.21094 8.27C8.9375 8.20279 8.66406 8.16919 8.39062 8.16919H2.77148C2.41602 8.16919 2.11523 8.29016 1.86914 8.53209C1.62305 8.77403 1.5 9.08317 1.5 9.45951C1.5 9.67457 1.55469 9.8829 1.66406 10.0845C1.77344 10.2861 1.93066 10.4407 2.13574 10.5482C2.34082 10.6557 2.55273 10.7095 2.77148 10.7095H8.39062C8.5 10.7095 8.60254 10.723 8.69824 10.7498C8.79395 10.7767 8.92383 10.891 9.08789 11.0926C9.25195 11.2942 9.38867 11.5966 9.49805 11.9998L15.3809 28.1531C15.4355 28.3144 15.5244 28.4689 15.6475 28.6168C15.7705 28.7646 15.9141 28.8789 16.0781 28.9595C16.2422 29.0402 16.4199 29.0805 16.6113 29.0805H34.3301C34.6035 29.0805 34.8564 28.9998 35.0889 28.8385C35.3213 28.6773 35.4785 28.4756 35.5605 28.2337L41.8359 14.9757C41.9727 14.5456 41.9111 14.1491 41.6514 13.7862ZM33.4277 26.4998H17.6367L13.4531 15.8225H38.7188L33.4277 26.4998ZM31.0625 30.4798C30.1602 30.4798 29.3877 30.7957 28.7451 31.4274C28.1025 32.0591 27.7812 32.8186 27.7812 33.7057C27.7812 34.5928 28.1025 35.3522 28.7451 35.9839C29.3877 36.6156 30.1602 36.9315 31.0625 36.9315C31.9648 36.9315 32.7373 36.6156 33.3799 35.9839C34.0225 35.3522 34.3438 34.5928 34.3438 33.7057C34.3438 32.8186 34.0225 32.0591 33.3799 31.4274C32.7373 30.7957 31.9648 30.4798 31.0625 30.4798ZM19.25 30.4798C18.6484 30.4798 18.0947 30.6277 17.5889 30.9234C17.083 31.2191 16.6865 31.6089 16.3994 32.0927C16.1123 32.5766 15.9688 33.1143 15.9688 33.7057C15.9688 34.5928 16.29 35.3522 16.9326 35.9839C17.5752 36.6156 18.3477 36.9315 19.25 36.9315C20.1523 36.9315 20.9248 36.6156 21.5674 35.9839C22.21 35.3522 22.5312 34.5928 22.5312 33.7057C22.5312 33.4906 22.5107 33.2755 22.4697 33.0605C22.4287 32.8454 22.3672 32.6438 22.2852 32.4557C22.2031 32.2675 22.1006 32.086 21.9775 31.9113C21.8545 31.7366 21.7178 31.5753 21.5674 31.4274C21.417 31.2796 21.2529 31.1452 21.0752 31.0242C20.8975 30.9032 20.7129 30.8024 20.5215 30.7218C20.3301 30.6411 20.125 30.5806 19.9062 30.5403C19.6875 30.5 19.4688 30.4798 19.25 30.4798Z" fill="#3F4E65"/></svg>
                        <p data-testid='basket-logo'className="header-down__counter">{countGoodsInBasket}</p>
                    </Link>
                    <div className="header-down__basket">
                        <p className="header-down__additional">Корзина</p>
                        <p className="header-down__price">{finalPrice} ₸</p>
                    </div>
                    </div>
                </div>
            </section>
            <section className="header-mobile">
                <div className="container header-mobile__container">
                    <Link to='/catalog/'>
                        <div className="header-mobile__btn">
                            <svg className="header-mobile__btn-logo" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H6C6.27614 0.5 6.5 0.723858 6.5 1V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V2Z" stroke="#3F4E65"/><path d="M8.5 1C8.5 0.723858 8.72386 0.5 9 0.5H13C13.8284 0.5 14.5 1.17157 14.5 2V6C14.5 6.27614 14.2761 6.5 14 6.5H9C8.72386 6.5 8.5 6.27614 8.5 6V1Z" stroke="#3F4E65"/><path d="M8.5 9C8.5 8.72386 8.72386 8.5 9 8.5H14C14.2761 8.5 14.5 8.72386 14.5 9V13C14.5 13.8284 13.8284 14.5 13 14.5H9C8.72386 14.5 8.5 14.2761 8.5 14V9Z" stroke="#3F4E65"/><path d="M0.5 9C0.5 8.72386 0.723858 8.5 1 8.5H6C6.27614 8.5 6.5 8.72386 6.5 9V14C6.5 14.2761 6.27614 14.5 6 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V9Z" stroke="#3F4E65"/></svg>
                            <p className="header-mobile__btn-name">Каталог</p>
                        </div>
                    </Link>
                    <div className="header-mobile__btn">
                        <svg className="header-mobile__btn-logo" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.125 13.125L10.3212 10.3162L13.125 13.125ZM11.875 6.5625C11.875 7.97146 11.3153 9.32272 10.319 10.319C9.32272 11.3153 7.97146 11.875 6.5625 11.875C5.15354 11.875 3.80228 11.3153 2.806 10.319C1.80971 9.32272 1.25 7.97146 1.25 6.5625C1.25 5.15354 1.80971 3.80228 2.806 2.806C3.80228 1.80971 5.15354 1.25 6.5625 1.25C7.97146 1.25 9.32272 1.80971 10.319 2.806C11.3153 3.80228 11.875 5.15354 11.875 6.5625V6.5625Z" stroke="#3F4E65" strokeLinecap="round"/></svg>
                        <p className="header-mobile__btn-name">Поиск</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header;