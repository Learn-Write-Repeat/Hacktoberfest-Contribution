using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MazeGenerator : MonoBehaviour
{
    public int startX = 0;
    public int startY = 0;

    public GridGenerator gridGenerator;
    public LinkedList<GameObject>[,] adj;

    private GameObject[,] gridArray;

    enum Direction { Left, Right, Up, Down };

    void Start()
    {
        gridArray = gridGenerator.gridArray;

        gridArray[startX, startY].GetComponent<GridStats>().visited = true;
        StartCoroutine(DFSVisit(gridArray[startX, startY]));
    }



    IEnumerator DFSVisit(GameObject s)
    {
        int x = s.GetComponent<GridStats>().x;
        int y = s.GetComponent<GridStats>().y;

        for (int i = 0; i < 4; i++)
        {
            var adj = AdjointGrid(x, y);

            if (adj != null)
            {
                RemoveWall(s, adj);
                adj.GetComponent<GridStats>().visited = true;

                yield return null;

                yield return StartCoroutine(DFSVisit(adj));
            }
            else
            {
                break;
            }
        }
    }

    void RemoveWall(GameObject s, GameObject adj)
    {

        int relativeX = s.GetComponent<GridStats>().x - adj.GetComponent<GridStats>().x;
        int relativeY = s.GetComponent<GridStats>().y - adj.GetComponent<GridStats>().y;
        Debug.Log(relativeY);
        if (relativeX == 1)
        {
            Destroy(s.GetComponent<GridStats>().walls[(int)Direction.Left]);
            Destroy(adj.GetComponent<GridStats>().walls[(int)Direction.Right]);
        }
        else if (relativeX == -1)
        {
            Destroy(s.GetComponent<GridStats>().walls[(int)Direction.Right]);
            Destroy(adj.GetComponent<GridStats>().walls[(int)Direction.Left]);
        }
        else if (relativeY == 1)
        {
            Destroy(s.GetComponent<GridStats>().walls[(int)Direction.Down]);
            Destroy(adj.GetComponent<GridStats>().walls[(int)Direction.Up]);
        }
        else if (relativeY == -1)
        {
            Destroy(s.GetComponent<GridStats>().walls[(int)Direction.Up]);
            Destroy(adj.GetComponent<GridStats>().walls[(int)Direction.Down]);
        }
    }

    GameObject AdjointGrid(int x, int y)
    {
        List<GameObject> adjList = new List<GameObject>();

        if (x - 1 > -1 && gridArray[x - 1, y] && !gridArray[x - 1, y].GetComponent<GridStats>().visited)
            adjList.Add(gridArray[x - 1, y]);

        if (x + 1 < gridGenerator.columns && gridArray[x + 1, y] && !gridArray[x + 1, y].GetComponent<GridStats>().visited)
            adjList.Add(gridArray[x + 1, y]);

        if (y + 1 < gridGenerator.rows && gridArray[x, y + 1] && !gridArray[x, y + 1].GetComponent<GridStats>().visited)
            adjList.Add(gridArray[x, y + 1]);

        if (y - 1 > -1 && gridArray[x, y - 1] && !gridArray[x, y - 1].GetComponent<GridStats>().visited)
            adjList.Add(gridArray[x, y - 1]);

        if (adjList.Count > 0)
        {
            return adjList[Random.Range(0,adjList.Count)];
        }
        else
        {
            return null;
        }
    }

}
