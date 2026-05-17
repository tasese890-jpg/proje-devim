import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/portugalData';

export const InteractiveQuiz: React.FC = () => {
  const [currentQ, setCurrentQ] = useState<number>(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const q = QUIZ_QUESTIONS[currentQ];

  const handleSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOpt(idx);
    setIsAnswered(true);
    if (idx === q.answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < QUIZ_QUESTIONS.length - 1) {
      setCurrentQ(prev => prev + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelectedOpt(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="relative py-24 bg-[#0e0e18] z-10 border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-rose-500/10 border border-rose-500/20 px-4 py-1.5 rounded-full text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Bilgi Sınaması</span>
          </div>
          <h2 className="font-playfair text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Portekiz Bilgi <span className="text-rose-500 underline decoration-amber-400">Yarışması</span>
          </h2>
          <p className="text-gray-300 text-base">
            Portekiz'in kültürü, tarihi ve lezzetleri hakkında öğrendiklerinizi sınayın!
          </p>
        </div>

        <div className="bg-glass rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />

          {!quizFinished ? (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between text-xs text-gray-400 font-mono mb-6">
                <span>Soru {currentQ + 1} / {QUIZ_QUESTIONS.length}</span>
                <span>Puan: {score * 20}</span>
              </div>

              <div className="w-full h-1.5 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-500 to-rose-500 transition-all duration-500"
                  style={{ width: `${((currentQ + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-8">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-4 mb-8">
                {q.options.map((opt, idx) => {
                  let btnStyle = "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10";
                  if (isAnswered) {
                    if (idx === q.answer) {
                      btnStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
                    } else if (idx === selectedOpt) {
                      btnStyle = "bg-rose-500/20 border-rose-500 text-rose-300 line-through";
                    } else {
                      btnStyle = "bg-white/5 border-white/5 text-gray-500 opacity-50";
                    }
                  } else if (selectedOpt === idx) {
                    btnStyle = "bg-amber-500/20 border-amber-500 text-amber-300 font-bold";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-5 rounded-2xl border flex items-center justify-between transition-all duration-300 ${btnStyle} cursor-pointer`}
                    >
                      <span className="text-base sm:text-lg">{opt}</span>
                      {isAnswered && idx === q.answer && <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />}
                      {isAnswered && idx === selectedOpt && idx !== q.answer && <XCircle className="w-6 h-6 text-rose-400 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {isAnswered && (
                <div className="bg-black/40 p-6 rounded-2xl border border-white/10 mb-8 animate-fadeIn">
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold block mb-2">💡 Açıklama:</span>
                  <p className="text-gray-200 text-sm leading-relaxed">{q.explanation}</p>
                </div>
              )}

              {/* Action */}
              {isAnswered && (
                <button
                  onClick={nextQuestion}
                  className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 text-black font-extrabold text-base tracking-wider uppercase shadow-xl hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {currentQ < QUIZ_QUESTIONS.length - 1 ? "Sonraki Soruya Geç ➔" : "Sonuçları Gör 🏆"}
                </button>
              )}
            </div>
          ) : (
            <div className="text-center py-8 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-amber-500/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(245,158,11,0.5)] animate-bounce">
                <Trophy className="w-10 h-10" />
              </div>

              <h3 className="font-playfair text-4xl sm:text-5xl font-black text-white mb-2">
                Tebrikler!
              </h3>
              <p className="font-dancing text-3xl text-amber-400 mb-6 font-bold">
                Portekiz Uzmanı Unvanını Kazandınız
              </p>

              <div className="bg-black/50 p-6 rounded-2xl max-w-sm mx-auto mb-8 border border-white/10">
                <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Doğru Sayısı / Puan</span>
                <span className="font-mono text-5xl font-black text-gradient-pt block">{score} / {QUIZ_QUESTIONS.length}</span>
                <span className="text-sm font-semibold text-emerald-400 mt-2 block">
                  {score === QUIZ_QUESTIONS.length ? "Kusursuz! Gerçek bir Lusitanyalısınız!" : score >= 3 ? "Harika bir performans!" : "Tekrar denemek isterseniz şansınız var!"}
                </span>
              </div>

              <button
                onClick={restartQuiz}
                className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-glass border border-white/20 text-white font-bold hover:bg-white/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Testi Yeniden Başlat</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
