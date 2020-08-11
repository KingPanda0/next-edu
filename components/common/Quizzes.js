export default function Quizzes() {
  return (
    <div className="my-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
      <div className="flex flex-col shadow-lg overflow-hidden rounded">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="//images.ctfassets.net/pmjbdli1hbu3/35RlQWZCv5Xd0iluGVvD30/dac14b0b5b01a9851f21b7b535621633/0000128810-womrig025-004_1_.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                The Fight for the Vote
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-800">
                August 18 marks the 100th anniversay of the ratification of the
                Nineteenth Amendment. To honor this historic event, we've
                dedicated a site to the 72-year struggle to win women's suffrage
                in the U.S.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-lg overflow-hidden rounded">
        <div className="flex-shrink-0">
          <img
            className="h-48 w-full object-cover"
            src="//images.ctfassets.net/pmjbdli1hbu3/1DkcL2CJqyrQmlwPBGGRLO/ea78bfe61fdcb2421d283894f8c3b2e5/Opposed_to_Suffrage_HQ.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                Voting Can Cause Infertility in Women?
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-800">
                In this video, learn about five of the more absurd explanations
                people gave to justify denying women the right to vote.
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col shadow-lg overflow-hidden rounded">
        <div className="flex-shrink-0 h-48 w-full bg-blue-600"></div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <a href="#" className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                Go premium
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-800">
                With access to all of Vercelannica's premium articles, you can
                always put your world in context.
              </p>
              <button className="mt-6 bg-geist-blue">Learn More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
