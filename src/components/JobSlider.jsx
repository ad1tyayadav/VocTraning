import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobCardSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const jobs = [
        {
            title: "Health Care Assistant",
            salary: "$42K-$48K",
            opportunities: "Good",
            image: "https://www.careers.govt.nz/themes/careers-2015/resources/images/job-opportunities-chart-good.png"
        },
        {
            title: "Farmer / Farm Manager",
            salary: "$60K-$70K",
            opportunities: "Good",
            image: "https://www.careers.govt.nz/themes/careers-2015/resources/images/job-opportunities-chart-good.png"
        },
        {
            title: "Building and Construction Manager",
            salary: "$80K-$170K",
            opportunities: "Good",
            image: "https://www.careers.govt.nz/themes/careers-2015/resources/images/job-opportunities-chart-good.png"
        },
        {
            title: "Heavy Truck Driver",
            salary: "$42K-$72K",
            opportunities: "Good",
            image: "https://www.careers.govt.nz/themes/careers-2015/resources/images/job-opportunities-chart-good.png"
        },
        {
            title: "Forestry and Logging Worker",
            salary: "$42K-$120K",
            opportunities: "Good",
            image: "https://www.careers.govt.nz/themes/careers-2015/resources/images/job-opportunities-chart-good.png"
        },
    ];

    return (
        <div className="max-w-7xl mx-auto my-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Explore Job Opportunities
            </h2>
            <Slider {...settings}>
                {jobs.map((job, index) => (
                    <div key={index} className="p-4">
                        <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col items-center justify-between">
                            {/* Title */}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {job.title}
                            </h3>

                            <hr className="my-2 w-full" />

                            {/* Salary Range */}
                            <p className="text-xl font-bold text-gray-700 mb-2">
                                {job.salary}
                            </p>

                            {/* Job Opportunities Chart */}
                            <img
                                src={job.image}
                                alt="Job opportunities chart"
                                className="h-32 w-32 object-contain mb-4"
                            />

                            {/* Job Opportunities Description */}
                            <p className="text-gray-600">Job opportunities</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default JobCardSlider;