import { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import './Chatbot.css';

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const api = "AIzaSyCYP0DxtRMJzEMW___26Eo2FBDsLrPzWbg";

  async function generateAnswer(e) {
    setGeneratingAnswer(true);
    e.preventDefault();
    setAnswer("Loading your answer... \n It might take up to 10 seconds");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${api}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      setAnswer(
        response.data.candidates[0].content.parts[0].text
      );
    } catch (error) {
      console.log(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }

    setGeneratingAnswer(false);
  }

  return (
    <div className="bg-gradient-to-r from-red-50 to-purple-100 w-[48vw] h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-[1200px] bg-white p-6 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Chat AI</h1>
        <form onSubmit={generateAnswer} className="flex flex-col space-y-4">
          <textarea
            required
            className="border border-gray-300 rounded-lg w-full h-32 p-3 text-lg resize-none transition-all duration-300 focus:border-blue-500 focus:shadow-lg"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything..."
          ></textarea>
          <button
            type="submit"
            className={`bg-blue-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300 ${generatingAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? 'Generating...' : 'Generate Answer'}
          </button>
        </form>
        <div className="mt-6 p-4 bg-gray-100 border border-gray-200 rounded-lg shadow-inner">
          <ReactMarkdown className="text-lg text-gray-800">{answer}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
