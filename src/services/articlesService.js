export function getArticles({searchTerm, section, page}) {
    const dateFrom = new Date();
    dateFrom.setDate(dateFrom.getDate() - 30);
    const date = dateFrom.toISOString().split('T')[0];
    const baseUrl = 'https://content.guardianapis.com/search?';
    const params = {
        'api-key':'test',
        q: searchTerm,
        'page-size': 10,
        page,
        'from-date': date,
        section: section === 'all' ? undefined : section
    };

    const fullUrl = baseUrl + Object.keys(params)
        .filter(key => !!params[key])
        .map(key =>`${key}=${params[key]}` )
        .join('&');

    return fetch(fullUrl)
        .then(res => res.json())
        .then(res => {
            const articles = res.response.results.map(art => {
                return {
                    id: art.id.replaceAll('/', '_'),
                    sectionName: art.sectionName,
                    title: art.webTitle,
                    publicationDate: art.webPublicationDate,
                    articleLink: art.webUrl
                };
            });

            return {
                articles,
                maxPages: res.response.pages
            };
        });
}