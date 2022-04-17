import Link from "next/link"
import { userService } from "../services";
import { useEffect, useState } from "react";

const Logo = () => (
  <svg width="206" height="40" viewBox="0 0 206 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.3065 2.91196C15.9918 1.54632 17.4091 0.443724 18.8918 0.122824C22.6236 -0.684804 26.0351 2.61716 25.285 6.31064C25.128 7.08317 24.9229 7.60641 24.5468 8.1926L24.2881 8.59596L27.8852 12.1847L31.4823 15.7735L31.9804 15.4668C34.0609 14.1855 36.7687 14.4951 38.4794 16.2097C39.1548 16.8867 39.6184 17.6308 39.8816 18.4609C40.1442 19.2886 40.1442 20.7181 39.8816 21.5457C39.1795 23.7593 37.0633 25.3314 34.7772 25.3377C33.8472 25.3402 32.6149 24.9708 31.8145 24.4495L31.5843 24.2995L31.0514 24.8402C30.7583 25.1375 29.1639 26.7962 27.5082 28.526L24.4978 31.6713L24.8269 32.3195C25.2604 33.1737 25.4308 33.9993 25.3737 34.9686C25.2919 36.3591 24.789 37.4558 23.7671 38.4719C22.0582 40.1712 19.4209 40.488 17.312 39.2474C16.5367 38.7914 15.7174 37.9115 15.307 37.0946C14.8321 36.1494 14.6739 35.3748 14.7361 34.2996L14.7844 33.4638L12.28 32.2167L9.77561 30.9696L9.63731 31.1766C9.37658 31.567 8.5481 32.3008 8.01227 32.616C7.1436 33.1271 6.46729 33.3007 5.34533 33.3007C4.58496 33.3007 4.26214 33.2622 3.79935 33.116C1.56888 32.4119 0 30.3021 0 28.007C0 25.5301 1.82292 23.2953 4.25897 22.7858C5.1212 22.6054 6.20907 22.6716 7.02293 22.9539C7.50795 23.1223 7.66079 23.1463 7.7345 23.0657C7.78614 23.0092 8.30501 22.2258 8.88746 21.3248L9.94658 19.6866L8.76546 17.6981C8.11581 16.6045 7.55591 15.6793 7.52123 15.6423C7.48656 15.6052 7.2178 15.6592 6.92407 15.7622C6.15442 16.0322 4.63293 16.0384 3.79935 15.7748C1.56821 15.0696 0 12.9607 0 10.6656C0 7.76424 2.43722 5.33268 5.34533 5.33268C7.05084 5.33268 8.72225 6.20918 9.70433 7.6185L10.1293 8.22845L10.7666 7.99359C11.1171 7.86445 12.1641 7.48419 13.0933 7.1487L14.7827 6.53866L14.7352 5.70494C14.6742 4.63219 14.833 3.85582 15.3065 2.91196ZM23.9395 4.38707C23.5621 2.94131 22.4519 1.83012 21.0105 1.45553C18.1534 0.7131 15.4256 3.43454 16.1698 6.28504C16.7279 8.42296 18.9229 9.7465 21.0105 9.20399C23.1507 8.64782 24.4808 6.46029 23.9395 4.38707ZM9.23184 9.7229C8.85437 8.27714 7.74419 7.16596 6.30284 6.79136C3.44336 6.04827 0.717251 8.76804 1.46208 11.6209C2.02114 13.7623 4.21175 15.0832 6.30284 14.5398C8.44297 13.9836 9.7731 11.7961 9.23184 9.7229ZM16.3253 9.15856C16.2054 9.04742 15.9356 8.7126 15.7259 8.41454C15.516 8.11648 15.3227 7.84944 15.2962 7.8211C15.207 7.7258 10.5658 9.48179 10.598 9.59868C10.7065 9.99345 10.6948 11.1101 10.5763 11.6661C10.503 12.01 10.443 12.3296 10.443 12.3765C10.4429 12.4669 13.5907 14.0619 13.6411 13.997C13.8505 13.7279 16.5432 9.5013 16.5432 9.44202C16.5432 9.39725 16.4451 9.26978 16.3253 9.15856ZM30.5177 16.7297L26.9362 13.1557C24.9663 11.19 23.335 9.58175 23.311 9.58175C23.287 9.58175 23.124 9.67897 22.9488 9.79769C21.6933 10.6488 19.8258 10.886 18.3665 10.3797C17.8882 10.2138 17.7375 10.1905 17.6633 10.2712C17.5415 10.4036 14.9519 14.4129 14.8985 14.5519C14.8749 14.6131 15.0018 14.7302 15.2021 14.8321L15.5461 15.0072L16.2327 14.3092C16.7841 13.7487 17.0592 13.5424 17.6296 13.2624C18.4284 12.8702 19.249 12.6695 20.053 12.6695C22.7648 12.6695 25.12 14.8084 25.3706 17.4988L25.4228 18.0593L27.0715 18.2857C27.9783 18.4103 28.923 18.533 29.1708 18.5585L29.6214 18.6049L29.7349 18.2209C29.7973 18.0097 29.9989 17.5878 30.183 17.2833L30.5177 16.7297ZM12.8067 15.2819C12.8553 15.2004 12.4792 14.9753 11.366 14.4194C10.5376 14.0056 9.8311 13.6673 9.79616 13.6676C9.76115 13.6679 9.64307 13.7992 9.53377 13.9594C9.42438 14.1195 9.18939 14.3818 9.01148 14.5422C8.83356 14.7026 8.68807 14.862 8.68824 14.8965C8.68841 14.931 9.15279 15.7403 9.7202 16.6949L10.7519 18.4306L11.7464 16.9114C12.2935 16.0758 12.7705 15.3426 12.8067 15.2819ZM24.0082 18.5369C24.2947 16.5532 22.9968 14.6443 21.0105 14.1281C18.1511 13.385 15.425 16.1048 16.1698 18.9576C16.7288 21.0991 18.9195 22.42 21.0105 21.8766C22.5977 21.4642 23.775 20.1526 24.0082 18.5369ZM14.8315 16.9602C14.8997 16.6393 14.9555 16.3376 14.9555 16.2898C14.9555 16.242 14.7568 16.1056 14.5138 15.9868L14.0722 15.7707L12.9052 17.5671C12.2633 18.555 11.6918 19.4476 11.6351 19.5506C11.5408 19.7218 11.7886 20.169 14.5506 24.8103C16.2108 27.6003 17.5775 29.8933 17.5876 29.9059C17.5977 29.9184 17.7799 29.8544 17.9924 29.7635C18.205 29.6726 18.6052 29.5516 18.8817 29.4947L19.3845 29.391V26.3396V23.2882L18.8622 23.1821C18.575 23.1238 18.0767 22.9492 17.755 22.7941C15.528 21.7209 14.3289 19.3279 14.8315 16.9602ZM38.6472 19.0606C38.2698 17.6148 37.1596 16.5037 35.7182 16.1291C32.8588 15.386 30.1327 18.1057 30.8775 20.9586C31.4365 23.1 33.6272 24.421 35.7182 23.8775C37.8584 23.3214 39.1885 21.1338 38.6472 19.0606ZM29.4125 19.9493L27.753 19.7213C25.2173 19.3731 25.1506 19.3686 25.1506 19.5452C25.1506 19.7994 24.5921 20.8551 24.1902 21.3606C23.4968 22.2328 22.3206 22.9587 21.2396 23.1815L20.7216 23.2882V26.3396V29.391L21.2396 29.4977C21.8691 29.6275 22.6257 29.9676 23.1861 30.3728L23.6034 30.6745L24.0298 30.237C24.4384 29.818 29.7189 24.2901 30.3139 23.6586L30.6011 23.3537L30.3354 22.9684C29.8173 22.2171 29.4177 21.0373 29.4139 20.2472L29.4125 19.9493ZM16.3683 30.4903C16.3129 30.3855 15.0278 28.2176 13.5124 25.6726C11.9971 23.1277 10.7448 21.0317 10.7296 21.0149C10.7006 20.9828 8.9493 23.6304 8.87936 23.8123C8.85696 23.8706 9.04933 24.1536 9.30697 24.4411C10.1408 25.372 10.6886 26.7565 10.6922 27.9429C10.6929 28.2056 10.6325 28.723 10.5578 29.0927C10.4832 29.4624 10.4361 29.7779 10.4533 29.7938C10.5218 29.857 15.2093 32.1757 15.2683 32.1755C15.303 32.1754 15.4353 32.0115 15.5622 31.8112C15.689 31.6108 15.9448 31.2746 16.1308 31.0639C16.433 30.7212 16.4581 30.6607 16.3683 30.4903ZM9.23184 28.9497C9.7731 26.8765 8.44297 24.689 6.30284 24.1328C3.44336 23.3897 0.717251 26.1095 1.46208 28.9623C2.02114 31.1038 4.21175 32.4247 6.30284 31.8813C7.74419 31.5067 8.85437 30.3955 9.23184 28.9497ZM23.9395 35.6195C24.4808 33.5463 23.1507 31.3588 21.0105 30.8026C18.9136 30.2577 16.7289 31.5798 16.1665 33.7341C15.6246 35.81 16.9586 37.9957 19.1081 38.5543C21.1921 39.0959 23.3787 37.7676 23.9395 35.6195ZM65.8317 29H68.1997L59.5917 6.6H57.2877L48.6797 29H51.0477L53.1277 23.496H63.7517L65.8317 29ZM53.9277 21.384L58.4397 9.384L62.9517 21.384H53.9277ZM70.7559 29H72.8679V5.64H70.7559V29ZM91.1097 13V16.136C89.6377 13.7893 87.483 12.616 84.6457 12.616C82.363 12.616 80.411 13.4267 78.7897 15.048C77.1897 16.6693 76.3897 18.6533 76.3897 21C76.3897 23.3467 77.1897 25.3307 78.7897 26.952C80.411 28.5733 82.363 29.384 84.6457 29.384C87.483 29.384 89.6377 28.2107 91.1097 25.864V28.36C91.1097 30.024 90.5763 31.336 89.5097 32.296C88.4643 33.256 87.0244 33.736 85.1897 33.736C82.331 33.736 80.4217 32.7653 79.4617 30.824L77.6057 31.88C78.9284 34.4827 81.4564 35.784 85.1897 35.784C87.387 35.784 89.275 35.1227 90.8537 33.8C92.4324 32.4773 93.2217 30.664 93.2217 28.36V13H91.1097ZM84.8057 27.336C83.035 27.336 81.5417 26.728 80.3257 25.512C79.1097 24.2533 78.5017 22.7493 78.5017 21C78.5017 19.2293 79.1097 17.736 80.3257 16.52C81.5417 15.2827 83.035 14.664 84.8057 14.664C86.5763 14.664 88.0697 15.2827 89.2857 16.52C90.5017 17.736 91.1097 19.2293 91.1097 21C91.1097 22.7493 90.5017 24.2533 89.2857 25.512C88.0697 26.728 86.5763 27.336 84.8057 27.336ZM105.149 29.384C107.475 29.384 109.459 28.584 111.101 26.984C112.744 25.3413 113.565 23.3467 113.565 21C113.565 18.632 112.744 16.648 111.101 15.048C109.48 13.4267 107.496 12.616 105.149 12.616C102.781 12.616 100.787 13.4267 99.1654 15.048C97.5441 16.648 96.7334 18.632 96.7334 21C96.7334 23.368 97.5441 25.3627 99.1654 26.984C100.787 28.584 102.781 29.384 105.149 29.384ZM105.149 27.336C103.379 27.336 101.885 26.728 100.669 25.512C99.4534 24.2533 98.8454 22.7493 98.8454 21C98.8454 19.2293 99.4534 17.736 100.669 16.52C101.885 15.2827 103.379 14.664 105.149 14.664C106.92 14.664 108.413 15.2827 109.629 16.52C110.845 17.736 111.453 19.2293 111.453 21C111.453 22.7493 110.845 24.2533 109.629 25.512C108.413 26.728 106.92 27.336 105.149 27.336ZM137.9 6.6H135.116L127.66 19.08L120.204 6.6H117.42V29H119.66V9.992L127.5 23.112H127.82L135.66 9.992V29H137.9V6.6ZM156.453 13V16.136C154.981 13.7893 152.827 12.616 149.989 12.616C147.707 12.616 145.755 13.4267 144.133 15.048C142.533 16.6693 141.733 18.6533 141.733 21C141.733 23.3467 142.533 25.3307 144.133 26.952C145.755 28.5733 147.707 29.384 149.989 29.384C152.827 29.384 154.981 28.2107 156.453 25.864V29H158.565V13H156.453ZM150.149 27.336C148.379 27.336 146.885 26.728 145.669 25.512C144.453 24.2533 143.845 22.7493 143.845 21C143.845 19.2293 144.453 17.736 145.669 16.52C146.885 15.2827 148.379 14.664 150.149 14.664C151.92 14.664 153.413 15.2827 154.629 16.52C155.845 17.736 156.453 19.2293 156.453 21C156.453 22.7493 155.845 24.2533 154.629 25.512C153.413 26.728 151.92 27.336 150.149 27.336ZM163.037 29H165.149V5.64H163.037V29ZM183.391 13V16.136C181.919 13.7893 179.764 12.616 176.927 12.616C174.644 12.616 172.692 13.4267 171.071 15.048C169.471 16.6693 168.671 18.6533 168.671 21C168.671 23.3467 169.471 25.3307 171.071 26.952C172.692 28.5733 174.644 29.384 176.927 29.384C179.764 29.384 181.919 28.2107 183.391 25.864V28.36C183.391 30.024 182.858 31.336 181.791 32.296C180.746 33.256 179.306 33.736 177.471 33.736C174.612 33.736 172.703 32.7653 171.743 30.824L169.887 31.88C171.21 34.4827 173.738 35.784 177.471 35.784C179.668 35.784 181.556 35.1227 183.135 33.8C184.714 32.4773 185.503 30.664 185.503 28.36V13H183.391ZM177.087 27.336C175.316 27.336 173.823 26.728 172.607 25.512C171.391 24.2533 170.783 22.7493 170.783 21C170.783 19.2293 171.391 17.736 172.607 16.52C173.823 15.2827 175.316 14.664 177.087 14.664C178.858 14.664 180.351 15.2827 181.567 16.52C182.783 17.736 183.391 19.2293 183.391 21C183.391 22.7493 182.783 24.2533 181.567 25.512C180.351 26.728 178.858 27.336 177.087 27.336ZM197.431 29.384C199.756 29.384 201.74 28.584 203.383 26.984C205.025 25.3413 205.847 23.3467 205.847 21C205.847 18.632 205.025 16.648 203.383 15.048C201.761 13.4267 199.777 12.616 197.431 12.616C195.063 12.616 193.068 13.4267 191.447 15.048C189.825 16.648 189.015 18.632 189.015 21C189.015 23.368 189.825 25.3627 191.447 26.984C193.068 28.584 195.063 29.384 197.431 29.384ZM197.431 27.336C195.66 27.336 194.167 26.728 192.951 25.512C191.735 24.2533 191.127 22.7493 191.127 21C191.127 19.2293 191.735 17.736 192.951 16.52C194.167 15.2827 195.66 14.664 197.431 14.664C199.201 14.664 200.695 15.2827 201.911 16.52C203.127 17.736 203.735 19.2293 203.735 21C203.735 22.7493 203.127 24.2533 201.911 25.512C200.695 26.728 199.201 27.336 197.431 27.336Z" fill="url(#paint0_linear_11_75)"/>
    <defs>
      <linearGradient id="paint0_linear_11_75" x1="0" y1="0" x2="13.2719" y2="74.3676" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4299E1"/>
        <stop offset="1" stopColor="#0079DD"/>
      </linearGradient>
    </defs>
  </svg>
);

const Github = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.8236 0.0578714C12.2898 0.253735 9.7973 1.05828 7.71221 2.35318C5.45526 3.75484 3.6359 5.59369 2.28899 7.83463C-0.689744 12.7906 -0.766748 19.1167 2.09026 24.1555C3.96461 27.4612 6.88446 29.965 10.4333 31.3099C11.1205 31.5703 12.6249 32 12.8494 32C12.9306 32 12.9486 31.8358 12.9478 31.1068C12.9472 30.6156 12.9232 30.1764 12.8945 30.1308C12.857 30.0713 12.4905 30.0514 11.5937 30.0602C10.2166 30.0737 9.81799 30.0041 9.05899 29.6175C8.41802 29.2911 8.25999 29.1117 7.8047 28.1934C7.16922 26.9117 6.95813 26.5985 6.37584 26.0727C5.89875 25.6419 5.44978 25.1211 5.44978 24.9984C5.44978 24.9208 5.89882 24.7846 6.14907 24.7864C6.44764 24.7885 7.10319 25.0571 7.54751 25.3594C7.77949 25.5173 8.01071 25.7785 8.2788 26.1857C8.77638 26.9414 9.47324 27.6514 9.96353 27.9025C10.4258 28.1392 11.0219 28.1986 11.7684 28.0824C12.5251 27.9645 12.8155 27.8631 12.8741 27.6962C13.2228 26.7041 13.3365 26.4357 13.542 26.1211C13.674 25.9187 13.7821 25.713 13.7821 25.6639C13.7821 25.6055 13.6261 25.5585 13.331 25.528C12.7462 25.4676 11.6531 25.1797 11.0705 24.9328C9.29298 24.1793 8.00592 22.8628 7.40398 21.1822C7.02611 20.1272 6.94362 19.5647 6.94626 18.0598C6.94855 16.7745 6.95994 16.6565 7.13894 16.0633C7.36718 15.3072 7.76908 14.4342 8.14799 13.8712L8.42531 13.4592L8.29179 12.7648C8.21833 12.3829 8.15819 11.897 8.15812 11.6851C8.15785 10.9857 8.46135 9.57506 8.66862 9.31216C8.76263 9.193 9.41603 9.24204 10.0118 9.41296C10.5559 9.56904 11.6876 10.1264 12.3246 10.5521L12.8461 10.9005L13.8175 10.6888C14.7079 10.4948 14.9296 10.4744 16.4754 10.4443C18.2395 10.4099 18.6893 10.4509 20.0506 10.7707L20.5995 10.8997L21.1543 10.5526C22.4518 9.74066 23.5903 9.28239 24.3312 9.27356C24.7559 9.26859 24.7832 9.27839 24.8992 9.47846C25.261 10.1023 25.4006 12.1903 25.1396 13.0755L25.0085 13.5201L25.2296 13.7286C25.5214 14.0036 26.2367 15.4924 26.4167 16.1991C26.591 16.8836 26.6115 18.5737 26.458 19.6012C26.1915 21.385 25.2727 23.1525 24.1821 23.9796C23.341 24.6174 21.9308 25.1911 20.4479 25.4987C20.0469 25.5819 19.7098 25.6562 19.6986 25.6639C19.6874 25.6716 19.8055 25.8826 19.961 26.1328C20.5022 27.0037 20.5174 27.0956 20.5174 29.5114C20.5174 30.7669 20.5438 31.6497 20.5812 31.6497C20.6164 31.6497 20.9211 31.5516 21.2582 31.4316C26.2819 29.6441 30.0518 25.5614 31.458 20.3853C32.3191 17.2154 32.1462 13.5099 30.996 10.4861C29.1161 5.54381 25.0519 1.84572 20.0699 0.543958C19.0444 0.276012 18.2429 0.144245 17.115 0.0582917C16.097 -0.0193253 15.8226 -0.0193954 14.8236 0.0578714Z" fill="#222222"/>
  </svg>
);

const Telegram = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M14.506 0.0371544C9.06806 0.561659 4.21101 3.85411 1.74974 8.68428C0.879299 10.3926 0.364989 12.0397 0.0835682 14.0204C-0.0411738 14.8988 -0.0230762 17.1711 0.11657 18.1504C0.364551 19.8895 0.877671 21.5374 1.66407 23.1205C3.22429 26.2612 5.71675 28.7515 8.86617 30.3164C13.9716 32.8532 20.0054 32.5044 24.7674 29.3971C26.6293 28.1822 28.3939 26.381 29.5986 24.4658C30.0564 23.7379 30.7477 22.3228 31.0617 21.4709C31.378 20.6124 31.7469 19.1224 31.8838 18.1504C32.0224 17.1658 32.0411 14.8879 31.9177 14.0204C31.548 11.4219 30.7234 9.2096 29.3543 7.14349C28.772 6.26481 28.1905 5.5559 27.3804 4.73711C24.8828 2.21283 21.776 0.647262 18.2234 0.12282C17.4574 0.00974652 15.3045 -0.0398755 14.506 0.0371544ZM25.6218 8.36365C25.8249 8.48842 26.0198 8.81525 26.0198 9.03126C26.0198 9.19539 22.9027 22.9826 22.8154 23.2046C22.6624 23.5939 22.0853 23.8741 21.6717 23.76C21.5545 23.7276 20.3744 22.9662 19.0494 22.0678C17.7244 21.1694 16.6213 20.4344 16.5982 20.4344C16.5751 20.4344 16.0437 20.9213 15.4173 21.5163C13.9738 22.8875 13.9907 22.8748 13.6114 22.8748C13.3524 22.8748 13.2732 22.8438 13.0915 22.6714C12.8982 22.488 12.7932 22.2198 12.0195 19.9338C11.5477 18.5399 11.1303 17.367 11.0919 17.3273C11.0534 17.2877 9.96524 16.9687 8.67367 16.6186C6.55888 16.0452 6.30827 15.9636 6.15316 15.798C6.04532 15.6828 5.98095 15.5447 5.98095 15.4284C5.98095 14.9847 5.82533 15.0507 12.5875 12.6208C16.0317 11.3831 20.1741 9.89267 21.7929 9.30859C23.4116 8.72452 24.7924 8.23174 24.8613 8.21353C25.0565 8.1619 25.4054 8.2308 25.6218 8.36365ZM17.1001 13.8967C14.3125 15.496 12.0092 16.8398 11.9818 16.883C11.9543 16.9262 11.9315 17.0341 11.9309 17.1229C11.9297 17.3397 13.2735 21.2678 13.3587 21.2962C13.4398 21.3231 13.4588 21.2132 13.6223 19.7773C13.6928 19.1578 13.764 18.5879 13.7806 18.5108C13.8006 18.4178 15.2598 17.1875 18.1149 14.8564C20.4822 12.9235 22.4402 11.3111 22.466 11.2733C22.5514 11.148 22.4829 11.017 22.3246 11.0029C22.2174 10.9934 20.5821 11.8992 17.1001 13.8967Z" fill="#222222"/>
  </svg>
);

const Avatar = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2C6.79086 2 5 3.79086 5 6C5 8.20914 6.79086 10 9 10C11.2091 10 13 8.20914 13 6C13 3.79086 11.2091 2 9 2ZM3 6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6C15 9.31371 12.3137 12 9 12C5.68629 12 3 9.31371 3 6ZM5 16C3.34315 16 2 17.3431 2 19C2 19.5523 1.55228 20 1 20C0.447715 20 0 19.5523 0 19C0 16.2386 2.23858 14 5 14H13C15.7614 14 18 16.2386 18 19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19C16 17.3431 14.6569 16 13 16H5Z" fill="#4299E1"/>
  </svg>
);

const Logout = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16C11.4477 16 11 16.4477 11 17C11 17.5523 11.4477 18 12 18H17C18.1046 18 19 17.1046 19 16V2C19 0.895431 18.1046 0 17 0H12C11.4477 0 11 0.447714 11 1C11 1.55228 11.4477 2 12 2H17V16H12Z" fill="#222222"/>
    <path d="M13.7136 9.70055C13.8063 9.6062 13.8764 9.49805 13.9241 9.38278C13.9727 9.26575 13.9996 9.1375 14 9.003L14 9L14 8.997C13.9992 8.74208 13.9016 8.48739 13.7071 8.29289L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L10.5858 8H1C0.447715 8 0 8.44771 0 9C0 9.55229 0.447715 10 1 10H10.5858L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13.7064 9.70782L13.7136 9.70055Z" fill="#222222"/>
  </svg>
)

const MyLink = ({secondary, children, to= "#", ...props}) => {
  return (
    <Link href={to} {...props}>
      {secondary
        ? <a className="px-4 py-2 text-black text-base font-sans">{children}</a>
        : <a className="bg-primary rounded-3xl px-6 py-2 text-white text-base font-sans hover:opacity-80">{children}</a>
      }
    </Link>
  );
}

const AuthLinks = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  return user ? (
    <div className="flex items-center">
      <Avatar/>
      <MyLink to="/profile" secondary>{user.username}</MyLink>
      <a onClick={logout}><Logout/></a>
    </div>
  ) : (
    <>
      <MyLink secondary to="/signUp">Sign Up</MyLink>
      <MyLink to="/signIn">Sign In</MyLink>
    </>
  )
}

function Nav() {
  return (
    <nav className="flex justify-between px-20 py-2 bg-white w-full">
      <Link href='/'><a><Logo/></a></Link>
      <div className="flex px-2 space-x-4">
        <AuthLinks/>
        <Github/>
        <Telegram/>
      </div>
    </nav>
  )
}

export default Nav;