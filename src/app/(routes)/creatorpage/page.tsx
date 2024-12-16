'use client';

import Image from 'next/image';
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin, FaHandshake } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function CreatorPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#f9f9f9] py-12 px-6">
        {/* Main Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8 space-y-10 border-t-4 border-[#FB2E86]">
          
          {/* About the Creator Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-[#1D3178] flex gap-2 items-center">
                About the Creator
              </h1>
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                I’m <span className="font-semibold">Safa Ghulam Muhammad</span>, and I am currently pursuing a specialization in the revolutionary fields of{' '}
                <span className="font-semibold">Generative AI</span>, <span className="font-semibold">Metaverse</span>, and{' '}
                <span className="font-semibold">Cloud Technologies</span>.With a passion for coding, I am eager to explore the limitless potential of technology and its impact on the future.
              </p>
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              Alongside my studies, I focus on balancing academics with personal growth. Driven by resilience, I am committed to shaping a brighter future and contributing to technological advancements.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/images/creator.jpeg"
                alt="Creator Pic"
                width={160}
                height={160}
                className="rounded-full shadow-lg border-2 border-[#FB2E86]"
              />
            </div>
          </div>

          {/* Separator */}
          <hr className="border-gray-200" />

          {/* Connect Section */}
          <div className="bg-[#EDEFFB] p-6 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-[#FB2E86] flex justify-center items-center gap-2">
              Feel Free to <span className="text-[#1D3178]">Connect</span> <FaHandshake className="text-[#FB2E86]" />
            </h2>
            <div className="mt-6 flex justify-center gap-6">
              <a
                href="mailto:ghulammuhammadsafa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#1D3178] hover:text-[#FB2E86] transition-transform transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/safaghulam12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#1D3178] hover:text-[#FB2E86] transition-transform transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/safaghulam12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#1D3178] hover:text-[#FB2E86] transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/safa-ghulam12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-[#1D3178] hover:text-[#FB2E86] transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CreatorPage;
