import React from "react";

const Forecast = () => {
  return (
    <>
      <div className="flex-none order-2 self-stretch flex-grow-0">
        <div className="flex flex-col justify-center items-start p-0 gap-3">
          <div className="flex items-center self-stretch flex-grow-0 gap-2 z-0">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex"
            >
              <path
                d="M10.875 5.8125C10.8736 7.05528 10.3793 8.24677 9.50056 9.12556C8.62177 10.0043 7.43028 10.4986 6.1875 10.5H2.23453C2.0398 10.4998 1.85311 10.4223 1.71541 10.2846C1.57772 10.1469 1.50025 9.9602 1.5 9.76547V5.8125C1.5 4.5693 1.99386 3.37701 2.87294 2.49794C3.75201 1.61886 4.9443 1.125 6.1875 1.125C7.4307 1.125 8.62299 1.61886 9.50206 2.49794C10.3811 3.37701 10.875 4.5693 10.875 5.8125Z"
                fill="#CCFBEF"
              />
            </svg>
            <span className="font-inter not-italic font-semibold text-xs leading-[30px] tracking-[0.5px] uppercase text-[#CCFBEF]">
              FORECASTs
            </span>
          </div>
          <div className="flex flex-col items-start p-0">
            <div className="flex-none order-2 self-stretch flex-grow-0">
              <div className="flex flex-row justify-center items-start p-0 gap-2">
                <div className="flex order-0 self-stretch flex-grow-0">
                  <h1
                    className="font-inter font-medium not-italic text-[29px] md:text-[54px] [leading-[67px] tracking-[-0.01em] text-[#FFFFFF]"
                    style={{
                      textShadow: "0px 3px 14px rgba(0, 0, 0, 0.08)",
                    }}
                  >
                    +15%
                  </h1>
                  <div className="flex flex-row items-start p-0 ">
                    <div className="flex-none order-1 flex-grow-0">
                      <svg
                        width="35"
                        height="35"
                        viewBox="0 0 35 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <path
                          d="M32.8125 7.65625V16.4062C32.8125 16.6963 32.6973 16.9745 32.4921 17.1796C32.287 17.3848 32.0088 17.5 31.7187 17.5C31.4287 17.5 31.1505 17.3848 30.9454 17.1796C30.7402 16.9745 30.625 16.6963 30.625 16.4062V10.2963L19.3676 21.5551C19.266 21.6568 19.1454 21.7374 19.0126 21.7925C18.8798 21.8475 18.7375 21.8759 18.5937 21.8759C18.45 21.8759 18.3077 21.8475 18.1749 21.7925C18.0421 21.7374 17.9215 21.6568 17.8199 21.5551L13.125 16.8588L4.05508 25.9301C3.84984 26.1353 3.57149 26.2506 3.28125 26.2506C2.99101 26.2506 2.71265 26.1353 2.50742 25.9301C2.30219 25.7248 2.18689 25.4465 2.18689 25.1562C2.18689 24.866 2.30219 24.5877 2.50742 24.3824L12.3512 14.5387C12.4527 14.437 12.5734 14.3563 12.7062 14.3013C12.8389 14.2462 12.9813 14.2179 13.125 14.2179C13.2687 14.2179 13.4111 14.2462 13.5438 14.3013C13.6766 14.3563 13.7972 14.437 13.8988 14.5387L18.5937 19.235L29.0787 8.75H22.9687C22.6787 8.75 22.4005 8.63477 22.1954 8.42965C21.9902 8.22453 21.875 7.94633 21.875 7.65625C21.875 7.36617 21.9902 7.08797 22.1954 6.88285C22.4005 6.67773 22.6787 6.5625 22.9687 6.5625H31.7187C32.0088 6.5625 32.287 6.67773 32.4921 6.88285C32.6973 7.08797 32.8125 7.36617 32.8125 7.65625Z"
                          fill="#F0FDFA"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className=""> */}
          <div className="flex-none order-1 self-stretch flex-grow-0">
            <p className="font-inter not-italic font-normal text-sm leading-[22px] tracking-tighter text-[#FFFFFF]">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
          {/* </div> */}
        </div>
        <div className="flex flex-col items-start p-0 pt-4">
          <div className="flex-none order-3 self stretch flex-grow-0">
            <div className="flex flex-row justify-center items-start p-0 gap-2">
              <div className="flex order-0 self-stretch flex-grow-0 ">
                <h1
                  className="font-inter font-medium not-italic text-[29px] md:text-[54px] [leading-[67px] tracking-[-0.01em] text-[#FFFFFF]"
                  style={{
                    textShadow: "0px 3px 14px rgba(0, 0, 0, 0.08)",
                  }}
                >
                  +20%
                </h1>
                <div className="flex flex-row items-start p-0 ">
                  <div className="flex-none order-1 flex-grow-0">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1"
                    >
                      <path
                        d="M32.8125 7.65625V16.4062C32.8125 16.6963 32.6973 16.9745 32.4921 17.1796C32.287 17.3848 32.0088 17.5 31.7187 17.5C31.4287 17.5 31.1505 17.3848 30.9454 17.1796C30.7402 16.9745 30.625 16.6963 30.625 16.4062V10.2963L19.3676 21.5551C19.266 21.6568 19.1454 21.7374 19.0126 21.7925C18.8798 21.8475 18.7375 21.8759 18.5937 21.8759C18.45 21.8759 18.3077 21.8475 18.1749 21.7925C18.0421 21.7374 17.9215 21.6568 17.8199 21.5551L13.125 16.8588L4.05508 25.9301C3.84984 26.1353 3.57149 26.2506 3.28125 26.2506C2.99101 26.2506 2.71265 26.1353 2.50742 25.9301C2.30219 25.7248 2.18689 25.4465 2.18689 25.1562C2.18689 24.866 2.30219 24.5877 2.50742 24.3824L12.3512 14.5387C12.4527 14.437 12.5734 14.3563 12.7062 14.3013C12.8389 14.2462 12.9813 14.2179 13.125 14.2179C13.2687 14.2179 13.4111 14.2462 13.5438 14.3013C13.6766 14.3563 13.7972 14.437 13.8988 14.5387L18.5937 19.235L29.0787 8.75H22.9687C22.6787 8.75 22.4005 8.63477 22.1954 8.42965C21.9902 8.22453 21.875 7.94633 21.875 7.65625C21.875 7.36617 21.9902 7.08797 22.1954 6.88285C22.4005 6.67773 22.6787 6.5625 22.9687 6.5625H31.7187C32.0088 6.5625 32.287 6.67773 32.4921 6.88285C32.6973 7.08797 32.8125 7.36617 32.8125 7.65625Z"
                        fill="#F0FDFA"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none order-4 self-stretch flex-grow-0">
            <p className="font-inter not-italic font-normal text-sm leading-[22px] tracking-tighter text-[#FFFFFF]">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </>
  );
};


export default Forecast;   