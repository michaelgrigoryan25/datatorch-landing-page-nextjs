export default function Companies() {
  return (
    <div className="space-y-3">
      <h1
        className="text-center font-bold text-lg md:text-2xl lg:text-3xl"
        style={{ fontFamily: "poppins" }}>
        Organizations using DataTorch
      </h1>

      <div className="flex items-center justify-center">
        <div className="scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg flex m-2 overflow-x-auto items-center space-x-6">
          <img
            width="120"
            src="https://datatorch.io/images/companies//guelph.png"
            alt=""
          />
          <img
            width="120"
            src="https://datatorch.io/images/companies//hiphen.png"
            alt=""
          />
          <img
            width="120"
            src="https://datatorch.io/images/companies//meditate-ai.png"
            alt=""
          />
          <img
            width="120"
            src="https://datatorch.io/images/companies//pearlii.png"
            alt=""
          />
          <img
            width="120"
            src="https://static.wixstatic.com/media/42146e_1567586067ee4f6084c1a8953e3c8f01~mv2.png"
            alt=""
          />
          <img
            width="120"
            src="https://datatorch.io/images/companies//jhu.png"
            alt=""
          />
          <img
            width="120"
            src="https://datatorch.io/images/companies//infarm.png"
            alt=""
          />

          <img
            width="120"
            className="grayscale -z-10"
            srcSet="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQ2IiBoZWlnaHQ9IjExNSIgdmlld0JveD0iMCAwIDY0NiAxMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuMDU4MyAxMTAuMDYySDAuMjk1ODk4VjQ3Ljk1ODZMMjYuOTM3NSA4Ni4yOTE0SDU0LjU2NzFMOTMuMTIzMiAzMS42MDg1Qzk2LjI2NTMgMzguNzU2MiA5Ny44ODY4IDQ2LjgzMDcgOTcuODg2OCA1NS40NzY4Qzk3Ljg4NjggODYuNTgyOSA3NC40MDc3IDExMC4wNjIgNDEuMDU4MyAxMTAuMDYyWk03Ny44OTA3IDEyLjI0NjhMNDEuMjA0MyA2NS4xOTE0TDI5LjQ1MzEgNDcuOTU4NkgwLjI5NTg5OFYwLjg5MTQ3OUg0MC4xNjFDNTUuNzE3OCAwLjg5MTQ3OSA2OC40MDk4IDUuMDgyNDkgNzcuODkwNyAxMi4yNDY4WiIgZmlsbD0iIzU4QTRCMCIvPgo8cGF0aCBkPSJNMTYyLjk5OCAxMTVDMTg2LjY0OSAxMTUgMjAzLjQ4MiAxMDMuMjgxIDIxMi42NDQgODYuNjYxMkwxODkuNDE5IDcyLjgxMTRDMTg0LjczMiA4My4wMzg5IDE3NC45MyA4OS40MzExIDE2My4yMTEgODkuNDMxMUMxNDcuODcgODkuNDMxMSAxMzguMjgxIDgxLjc2MDUgMTM0Ljg3MiA3MC4wNDE0SDIxNy4xMTlWNTkuMzg3N0MyMTcuMTE5IDI4LjcwNTEgMTk0Ljc0NiA0LjIwMTY2IDE2Mi4xNDYgNC4yMDE2NkMxMzEuNDYzIDQuMjAxNjYgMTA2Ljc0NyAyOC45MTgyIDEwNi43NDcgNTkuNjAwOEMxMDYuNzQ3IDkwLjI4MzQgMTI5Ljc1OSAxMTUgMTYyLjk5OCAxMTVaTTE2Mi4zNTkgMjkuNzcwNUMxNzQuNzE3IDI5Ljc3MDUgMTgzLjg3OSAzNS41MjM1IDE4Ny43MTUgNDYuNjAzM0wxMzYuMTUxIDQ2LjYwMzNDMTQwLjYyNSAzNi41ODg5IDE1MC4wMDEgMjkuNzcwNSAxNjIuMzU5IDI5Ljc3MDVaIiBmaWxsPSIjRDhEQkUyIi8+CjxwYXRoIGQ9Ik00NTguMDYyIDExMi44NjlDNDcwLjIwNyAxMTIuODY5IDQ4MC40MzUgMTA3LjU0MiA0ODcuNDY2IDk5LjAxOTRWMTEwLjczOUg1MTYuNDQ0VjQuMjAxNjZINDg3LjI1M1Y2Mi4zNzA4QzQ4Ny4yNTMgODAuMjY5IDQ3OC4wOTEgODcuOTM5NiA0NjcuMDExIDg3LjkzOTZDNDU0LjAxNCA4Ny45Mzk2IDQ0Ny40MDggNzkuNjI5NyA0NDcuNDA4IDY1LjM1MzhWNC4yMDE2Nkg0MTcuNzkxVjY5LjE4OTFDNDE3Ljc5MSA5Ni42NzU2IDQzMi45MTkgMTEyLjg2OSA0NTguMDYyIDExMi44NjlaIiBmaWxsPSIjRDhEQkUyIi8+CjxwYXRoIGQ9Ik0yODcuMDY0IDEuNTY3NzhDMjc0LjkxOSAxLjU2Nzc4IDI2NC42OTEgNi44OTQ2MSAyNTcuNjYgMTUuNDE3NkwyNTcuNjYgMy42OTg1TDIyOC42ODIgMy42OTg1TDIyOC42ODIgMTEwLjIzNUwyNTcuODczIDExMC4yMzVMMjU3Ljg3MyA1Mi4wNjYyQzI1Ny44NzMgMzQuMTY4IDI2Ny4wMzUgMjYuNDk3NCAyNzguMTE1IDI2LjQ5NzRDMjkxLjExMiAyNi40OTc0IDI5Ny43MTggMzQuODA3MyAyOTcuNzE4IDQ5LjA4MzJMMjk3LjcxOCAxMTAuMjM1TDMyNy4zMzUgMTEwLjIzNUwzMjcuMzM1IDQ1LjI0NzlDMzI3LjMzNSAxNy43NjE0IDMxMi4yMDcgMS41Njc3OSAyODcuMDY0IDEuNTY3NzhaIiBmaWxsPSIjRDhEQkUyIi8+CjxwYXRoIGQ9Ik01MzQuNjM1IDExMC43MzlINTYzLjgyNlY0LjIwMjAzSDUzNC42MzVWMTEwLjczOVoiIGZpbGw9IiNEOERCRTIiLz4KPHBhdGggZD0iTTU5Ni40ODQgMzAuNDEwMUg1NzguMzczVjQuMjAyMDNINTk2LjQ4NEg2MjUuNjc1SDY0NS43MDRWMzAuNDEwMUg2MjUuNjc1VjY0LjI4ODhWMTEwLjA2Mkg1OTYuNDg0VjY0LjUwMTlWMzAuNDEwMVoiIGZpbGw9IiNEOERCRTIiLz4KPHBhdGggZD0iTTM1Ny4wMDggMzAuNDA5N0gzMzguODk2VjQuMjAxNjZIMzU3LjAwOEgzODYuMTk5SDQwNi4yMjhWMzAuNDA5N0gzODYuMTk5VjY0LjI4ODRWMTEwLjA2MkgzNTcuMDA4VjY0LjUwMTVWMzAuNDA5N1oiIGZpbGw9IiNEOERCRTIiLz4KPC9zdmc+Cg=="
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
