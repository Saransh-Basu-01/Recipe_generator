import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `You are an assistant...`

const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(', ')
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Give me a recipe.` },
            ],
            max_tokens: 1024,
        })
        return response.choices?.[0]?.message?.content || "No response from model."
    } catch (err) {
        console.error(err)
        return 'Error calling model'
    }
}
