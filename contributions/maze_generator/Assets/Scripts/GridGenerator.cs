using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridGenerator : MonoBehaviour
{
    public float gridWidth = 1f;
    public float wallWidth = 0.25f;
    public int rows = 25;
    public int columns = 25;
    public GameObject gridPrefab;
    public GameObject wallPrefab;
    public GameObject[,] gridArray;

    enum Direction { Left, Right, Up, Down };

    void Awake()
    {
        Debug.Log(Vector2.up);
        Debug.Log(Vector2.left);
        gridArray = new GameObject[columns, rows];

        if (gridPrefab)
        {
            GenerateGrid();
        }
        else
        {
            Debug.Log("Grid prefab is missing");
        }
    }

    void GenerateGrid()
    {
        Vector2 startPosition = new Vector2(-(columns * gridWidth) / 2, -(rows * gridWidth) / 2);
        for (int row = 0; row < rows; row++)
        {
            for (int col = 0; col < columns; col++)
            {
                Vector2 gridPosition = startPosition + new Vector2(col * gridWidth, row * gridWidth);

                GameObject grid = Instantiate(gridPrefab, gridPosition, Quaternion.identity);
                grid.transform.SetParent(gameObject.transform);

                grid.GetComponent<GridStats>().walls = new GameObject[4];

                CreateWall(grid, Direction.Up, gridPosition + Vector2.up * gridWidth / 2, 0);
                CreateWall(grid, Direction.Right, gridPosition + Vector2.right * gridWidth / 2, 90);
                CreateWall(grid, Direction.Down, gridPosition + Vector2.down * gridWidth / 2, 0);
                CreateWall(grid, Direction.Left, gridPosition + Vector2.left * gridWidth / 2, 90);

                grid.GetComponent<GridStats>().x = col;
                grid.GetComponent<GridStats>().y = row;

                gridArray[col, row] = grid;
            }
        }
    }

    void CreateWall(GameObject grid, Direction direction, Vector2 position, float rotation)
    {
        GameObject wall = Instantiate(wallPrefab, position, Quaternion.Euler(0, 0, rotation));
        grid.GetComponent<GridStats>().walls[(int)direction] = wall;
        wall.transform.SetParent(grid.transform);
    }
}
