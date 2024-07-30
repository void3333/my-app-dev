// filter.js
export function filterInspections(inspections, searchText) {
    return inspections.filter(inspection => {
        return (inspection.container ? String(inspection.container).toLowerCase().includes(searchText.toLowerCase()) : false);
    });
}
