
export default async function mylessons(req, res) {
    res.json({
        count: 3,
        posts: [
            {id: "one", title: "awsome title: ss", author: "ckman", 
                image: "https://images.unsplash.com/photo-1610970883364-30e1ab2dc48b",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: "xyz-2-2021"},
            {id: "two", title: "second title: ss", author: "ckman", 
                image: "https://images.unsplash.com/photo-1610970883364-30e1ab2dc48b",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: "xyz-2-2021"},
            {id: "third", title: "second title: ss", author: "ckman", 
                image: "https://images.unsplash.com/photo-1610970883364-30e1ab2dc48b",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", created_at: "xyz-2-2021"}
        ]
    })
}