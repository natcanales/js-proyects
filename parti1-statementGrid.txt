/*****************************************************************************

    We are going to make a robot move in a grid where there may be
    some obstacles. We are going to divide the practice in several
    parts, so let's go little by little.

    First of all, create a function that will receive two parameters:
    the first one will be the number of rows the grid has, and the
    second one will be the number of columns. If no values are
    passed as arguments to the function when calling it, the default
    values for both rows and columns will be 10. The minimum values
    for both rows and columns will be 5 (i.e., the minimum size of
    the grid will be 5x5).

    The function will have to return a matrix with the specified
    number of rows and columns. Each matrix' cell will have boolean
    values, initially set as 'false'. These values will tell us if
    there is an object in a concrete cell or not. Initializing all
    the cells to 'false' will mean that there are no obstacles yet.

*****************************************************************************/