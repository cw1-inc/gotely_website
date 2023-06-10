
export async function fetchLinks() {
    const res = await fetch(`https://cdn.contentful.com/spaces/227tdebzsnjx/entries?content_type=post&select=fields.slug`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ` + "gXsNtlAeUoodqFX86AHXMMcl3MeLfSVzy3PopnMGhvU"
        },
        next: { revalidate: 10 }
    })
    const a1 = await res.json()

    return a1.items
}



export default async function sitemap() {

    let a1 = await fetchLinks()
    let a2 = [
        {
            url: 'https://blog.gotely.com',
            lastModified: new Date(),
        },
        {
            url: 'https://blog.gotely.com',
            lastModified: new Date(),
        },
        {
            url: 'https://blog.gotely.com/blog',
            lastModified: new Date(),
        }
    ]
    if (a1.length > 0) {
        a2 = [
            ...a2,
            ...a1.map(k => ({
                url: `https://blog.gotely.com/blog/${k.fields.slug}`,
                lastModified: new Date(),
            }))
        ]
        console.log(a2)
        return a2
    }else{
        return a2
    }

}