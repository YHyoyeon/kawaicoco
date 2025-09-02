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
    { icon: Weight, label: '체중', value: `점점 늘어나는 중`, color: 'from-green-300 to-green-400', bgColor: 'bg-green-100' },
    { icon: Heart, label: '생일', value: '2020년 6월 25일', color: 'from-pink-300 to-pink-400', bgColor: 'bg-pink-100' },
    { icon: MapPin, label: '출생지', value: '대전광역시', color: 'from-purple-300 to-purple-400', bgColor: 'bg-purple-100' },
  ];

  const personalityDetails = [
    {
      trait: '귀여움',
      description: '복실복실하고 부들부들하고 말랑말랑하고 따끈따끈함',
      icon: Heart,
      color: 'from-pink-300 to-pink-400',
      image: '/coco_5.png'
    },
    {
      trait: '목청이 우렁참',
      description: '소리지르기 우승자라 목욕 포기함',
      icon: Star,
      color: 'from-yellow-300 to-yellow-400',
      image: '/coco_3.png'
    },
    {
      trait: '호기심도 겁도 많음',
      description: '아주 귀여움',
      icon: Coffee,
      color: 'from-blue-300 to-blue-400',
      image: '/coco_1.png'
    },
    {
      trait: '나를 좋아함',
      description: '좋다',
      icon: Heart,
      color: 'from-purple-300 to-purple-400',
      image: '/coco_2.png'
    }
  ];

  const cocoPride = [
    { 
      title: '츄르 잘 먹음', 
      description: '아주 귀엽고 못생기게 야무지게 먹음',
      image: '/coco_5.png',
      highlight: '먹보 고양이'
    },
    { 
      title: '가끔 멍청하게 바라보는게', 
      description: '아주 귀여워', 
      image: '/coco_3.png',
      highlight: '멍청함의 귀여움'
    },
    { 
      title: '집중할 때', 
      description: '너무 귀여워', 
      image: '/coco_1.png',
      highlight: '집중력의 달인'
    },
    { 
      title: '잘 논다', 
      description: '꼬리 펑하고 잘 논다. 눈곱이 껴도 귀엽다.', 
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
              {catInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ✨ 프로필 ✨
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
          {/* 귀여운 애니메이션 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* 춤추는 코코 애니메이션 */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block mb-8"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-r from-orange-400 to-amber-500 p-3 shadow-2xl border-4 border-orange-300">
                <Image
                  src="/coco_3.png"
                  alt="춤추는 코코"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.div>
            
            {/* 회전하는 하트들 */}
            <div className="flex justify-center space-x-8 mb-8">
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "linear"
                  }}
                  className="text-4xl"
                >
                  💖
                </motion.div>
              ))}
            </div>
            
            {/* 펄럭이는 메시지 */}
            <motion.div
              animate={{ 
                rotate: [0, 2, -2, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block bg-white px-8 py-4 rounded-full shadow-xl border-4 border-orange-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 font-onfont">
                귀여워서 넣어봤어요
              </h3>
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
                {catInfo.name} 특징
              </h2>
              <Sparkles className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              나름 자랑거리
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
