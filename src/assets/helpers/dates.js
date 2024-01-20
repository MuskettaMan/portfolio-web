function getFormattedDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const year = date.getFullYear();

    // Format the date as 'dd-mm-yyyy'
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
}

export {
    getFormattedDate
}