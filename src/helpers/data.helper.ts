export const parseCategoryData = (data: Record<string, unknown>): ICategoryDetails => {
    return {
        id: String(data.id),
        name: String(data.name),
    };
};