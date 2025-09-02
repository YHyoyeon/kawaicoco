'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { catInfoAtom } from '@/store/catStore';
import { Heart, Calendar, Weight, Star, MapPin, Coffee, Crown, Sparkles } from 'lucide-react';

export default function AboutPage() {
  const [catInfo] = useAtom(catInfoAtom);

  const stats = [
    { icon: Calendar, label: '나이', value: `${catInfo.age}살`, color: 'from-blue-300 to-blue-400', bgColor: 'bg-blue-100' },
    { icon: Weight, label: '체중', value: `${catInfo.weight}kg`, color: 'from-green-300 to-green-400', bgColor: 'bg-green-100' },
    { icon: Heart, label: '성별', value: '여아', color: 'from-pink-300 to-pink-400', bgColor: 'bg-pink-100' },
    { icon: MapPin, label: '출생지', value: '서울', color: 'from-purple-300 to-purple-400', bgColor: 'bg-purple-100' },
  ];

  const personalityDetails = [
    {
      trait: '사교적',
      description: '누구에게나 친근하게 다가가며, 새로운 사람도 쉽게 친해져요.',
      icon: Heart,
      color: 'from-pink-300 to-pink-400',
      image: '/coco_5.png'
    },
    {
      trait: '장난꾸러기',
      description: '장난감을 가지고 하루종일 놀 수 있으며, 특히 움직이는 물체를 좋아해요.',
      icon: Star,
      color: 'from-yellow-300 to-yellow-400',
      image: '/coco_3.png'
    },
    {
      trait: '호기심 많음',
      description: '새로운 소리나 움직임에 항상 관심을 보이며, 탐험하는 것을 좋아해요.',
      icon: Coffee,
      color: 'from-blue-300 to-blue-400',
      image: '/coco_1.png'
    },
    {
      trait: '사랑스러움',
      description: '부드러운 털과 예쁜 눈으로 모든 사람의 마음을 사로잡아요.',
      icon: Heart,
      color: 'from-purple-300 to-purple-400',
      image: '/coco_2.png'
    }
  ];

  const cocoPride = [
    { 
      title: '츄르 잘 먹음', 
      description: '아주 귀엽고 못생기게 야무지게 먹음', 
      icon: '🍖', 
      image: '/coco_5.png',
      highlight: '먹보 고양이'
    },
    { 
      title: '가끔 멍청하게 바라보는게', 
      description: '아주 귀여워', 
      icon: '🤪', 
      image: '/coco_3.png',
      highlight: '멍청함의 귀여움'
    },
    { 
      title: '집중할 때', 
      description: '너무 귀여워', 
      icon: '🎯', 
      image: '/coco_1.png',
      highlight: '집중력의 달인'
    },
    { 
      title: '잘 논다', 
      description: '꼬리 펑하고 잘 논다. 눈곱이 껴도 귀엽다.', 
      icon: '🎾', 
      image: '/coco_2.png',
      highlight: '놀이의 천재'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* 배경 장식 요소들 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-24 h-24 bg-orange-200 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-amber-200 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex justify-center mb-8"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-orange-400 to-amber-500 p-2 shadow-lg">
                <Image
                  src="/coco_5.png"
                  alt="코코"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 font-onfont">
              {catInfo.name}에 대해 알아보기 🐱
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              코리안 숏헤어 삼색 고양이의 매력적인 특성과 함께 살아가는 우리집 고양이 Coco의 
              모든 것을 소개합니다 ✨
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className={`${stat.bgColor} p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border-4 border-white`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Breed Information */}
      <section className="py-20 bg-gradient-to-r from-orange-100 to-amber-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="inline-flex items-center space-x-4 bg-white px-6 py-3 rounded-full shadow-lg border-4 border-orange-300 mb-6">
                <Crown className="w-6 h-6 text-orange-500" />
                <h2 className="text-4xl font-bold text-gray-800">
                  코리안 숏헤어의 매력
                </h2>
                <Crown className="w-6 h-6 text-orange-500" />
              </div>
              <p className="text-lg text-gray-600 mb-6">
                코리안 숏헤어는 한국에서 자연적으로 형성된 고양이 품종입니다. 
                특히 삼색 고양이는 흰색, 검은색, 주황색 털이 조화롭게 섞여 있어서 
                한국의 전통적인 아름다움을 잘 보여줘요.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700 font-medium">삼색 털의 아름다운 조화</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700 font-medium">한국 고양이의 독특한 특성</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700 font-medium">적응력이 강하고 건강함</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
                  <span className="text-gray-700 font-medium">가족과의 유대감이 깊음</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-2xl border-4 border-orange-300"
            >
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-orange-400 to-amber-500 p-2">
                  <Image
                    src="/coco_5.png"
                    alt="코코"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {catInfo.name}의 특징
                </h3>
                <p className="text-gray-600">
                  코리안 숏헤어 삼색 고양이의 전형적인 특성을 잘 보여주는 귀여운 고양이예요 ✨
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personality Details */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-4 border-orange-300">
              <Sparkles className="w-8 h-8 text-orange-500" />
              <h2 className="text-4xl font-bold text-gray-800">
                {catInfo.name}의 성격 분석
              </h2>
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              각 성격 특성이 어떻게 나타나는지 자세히 알아보세요 🌟
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {personalityDetails.map((personality, index) => {
              return (
                <motion.div
                  key={personality.trait}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className={`bg-gradient-to-r ${personality.color} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border-4 border-white relative`}>
                    {/* 말풍선 꼬리 */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden">
                        <Image
                          src={personality.image}
                          alt={personality.trait}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                          style={{ width: "auto", height: "auto" }}
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {personality.trait}
                        </h3>
                        <p className="text-white text-lg leading-relaxed">
                          {personality.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 코코 자랑 */}
      <section className="py-20 bg-gradient-to-r from-amber-100 to-yellow-100">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-4 bg-white px-8 py-4 rounded-full shadow-lg border-4 border-amber-300">
              <Star className="w-8 h-8 text-amber-500" />
              <h2 className="text-4xl font-bold text-gray-800">
                {catInfo.name} 자랑
              </h2>
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              우리 코코가 특별한 이유를 자랑해요 ✨
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {cocoPride.map((pride, index) => (
                <motion.div
                  key={pride.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, rotate: 1 }}
                  className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all border-4 border-amber-200 overflow-hidden relative group"
                  style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fed7aa 25%, #fef3c7 50%, #fed7aa 75%, #fef3c7 100%)',
                    boxShadow: '0 20px 40px rgba(251, 191, 36, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {/* 메모장 클립 장식 */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-red-400 rounded-full shadow-lg border-2 border-red-500"></div>
                  

                  
                  <div className="text-center">
                    {/* 사진을 더 크게 */}
                    <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-gradient-to-r from-orange-100 to-amber-100 p-3 shadow-xl border-4 border-white">
                      <Image
                        src={pride.image}
                        alt={pride.title}
                        width={192}
                        height={192}
                        className="w-full h-full object-cover rounded-xl"
                        style={{ width: "auto", height: "auto" }}
                      />
                    </div>
                    

                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 font-onfont">
                      {pride.title}
                    </h3>
                    
                    <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                      {pride.description}
                    </p>
                    
                    {/* 자랑 포인트를 메모장 느낌으로 */}
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-amber-300 to-orange-300 text-white text-base font-bold rounded-full shadow-lg border-2 border-amber-400 transform rotate-1">
                      {pride.highlight}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
