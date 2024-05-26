import { Carousel } from "react-bootstrap"

function ProjectCarousels({
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
}) {
  return (
    <div style={{ height: "100%", zIndex: "50" }}>
      <Carousel
        style={{
          marginTop: "50px",
          //   backgroundColor: "black",
          //   height: "100%",
        }}
      >
        <Carousel.Item
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={img1}
            alt=""
            style={{
              width: "100%",
              maxWidth: "50%",
              maxHeight: "50%",
              height: "50%",
            }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={img2}
            alt=""
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              height: "50%",
            }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={img3}
            alt=""
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              height: "50%",
            }}
          />
        </Carousel.Item>
        <Carousel.Item
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={img4}
            alt=""
            style={{
              maxWidth: "50%",
              maxHeight: "50%",
              height: "50%",
            }}
          />
        </Carousel.Item>

        {img5 && (
          <Carousel.Item
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={img5}
              alt=""
              style={{
                width: "100%",
                maxWidth: "50%",
                maxHeight: "50%",
                height: "50%",
              }}
            />
          </Carousel.Item>
        )}

        {img6 && (
          <Carousel.Item
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={img6}
              alt=""
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                height: "50%",
              }}
            />
          </Carousel.Item>
        )}

        {img7 && (
          <Carousel.Item
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={img7}
              alt=""
              style={{
                maxWidth: "50%",
                maxHeight: "50%",
                height: "50%",
              }}
            />
          </Carousel.Item>
        )}
      </Carousel>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default ProjectCarousels
