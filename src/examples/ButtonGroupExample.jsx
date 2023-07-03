import Button from "../components/buttons/Button";

const row = `flex gap-4 flex-wrap`;

const ButtonGroupExample = () => {
  return (
    <>
      <div className={row}>
        <Button.Group size="xs">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group soft size="xs">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline size="xs">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <div className={row}>
        <Button.Group variant="success" size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group soft variant="success" size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline variant="success" size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <div className={row}>
        <Button.Group variant="danger">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group soft variant="danger">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline variant="danger">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <div className={row}>
        <Button.Group variant="light" size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline variant="light" size="lg">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <div className={row}>
        <Button.Group variant="dark" size="xl">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline variant="dark" size="xl">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <div className={row}>
        <Button.Group variant="text">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <Button.Group vertical variant="text">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </Button.Group>

      <div className={row}>
        <Button.Group vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group soft vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>

        <Button.Group outline vertical>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Button.Group>
      </div>

      <Button.Toolbar vertical>
        <Button.Group variant="dark">
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </Button.Group>

        <Button.Group variant="dark">
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </Button.Group>

        <Button.Group variant="dark">
          <Button>8</Button>
        </Button.Group>
      </Button.Toolbar>
    </>
  );
};

export default ButtonGroupExample;
