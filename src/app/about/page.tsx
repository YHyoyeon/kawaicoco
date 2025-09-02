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

  const dailyRoutine = [
    { time: '06:00', activity: '아침 산책', description: '창가에서 새소리 듣기', icon: '🌅', image: '/coco_6.png' },
    { time: '08:00', activity: '아침 식사', description: '참치와 연어가 들어간 고급 사료', icon: '🍽️', image: '/coco_4.png' },
    { time: '10:00', activity: '놀이 시간', description: '장난감 쥐와 사냥놀이', icon: '🎾', image: '/coco_3.png' },
    { time: '12:00', activity: '낮잠', description: '소파에서 편안하게 휴식', icon: '😴', image: '/coco_2.png' },
    { time: '15:00', activity: '창가 관찰', description: '밖의 풍경과 새들 구경', icon: '👀', image: '/coco_1.png' },
    { time: '18:00', activity: '저녁 식사', description: '닭고기와 야채가 들어간 사료', icon: '🍖', image: '/coco_4.png' },
    { time: '20:00', activity: '저녁 놀이', description: '레이저 포인터로 운동', icon: '🔴', image: '/coco_3.png' },
    { time: '22:00', activity: '취침 준비', description: '부드러운 담요 위에서 잠들기', icon: '🛏️', image: '/coco_2.png' }
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
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
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
              const Icon = personality.icon;
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

      {/* Daily Routine */}
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
                {catInfo.name}의 하루 일과
              </h2>
              <Star className="w-8 h-8 text-amber-500" />
            </div>
            <p className="text-xl text-gray-600 mt-6">
              매일 반복되는 Coco의 특별한 일과를 시간순으로 정리했어요 ⏰
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {dailyRoutine.map((routine, index) => (
                <motion.div
                  key={routine.time}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border-4 border-amber-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-orange-100 to-amber-100 p-1">
                      <Image
                        src={routine.image}
                        alt={routine.activity}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-bold text-amber-600">
                          {routine.time}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {routine.activity}
                        </h3>
                      </div>
                      <p className="text-gray-600">{routine.description}</p>
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
