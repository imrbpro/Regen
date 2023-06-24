const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  organization: "org-Ko59SEgCPKf1MsXq9kfgjbsS",
  apiKey: "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"
});
const openai = new OpenAIApi(configuration);

const createBlogPostGeneric = async (topic) => {
  const prompt = topic;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const blogPost = response.data.choices[0].text.trim();
  return blogPost;
};

const createBlogPost = async (topic) => {
  
  const prompt = "Create a Post for "+topic;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 1,
    max_tokens: 600,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  console.log(response);
  const blogPost = response.data.choices[0].text.trim();
  return blogPost;
};

module.exports = {
  createBlogPostGeneric,
  createBlogPost
};
