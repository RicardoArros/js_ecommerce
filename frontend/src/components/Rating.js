const Rating = {
  render: (props) => {
    // if !props.value return empty div
    if (!props.value) {
      return '<div></div>';
    }

    // else use fa fa-star, fa-star-half-o and fa-star-o
    return `  
      <div class="rating">

        <!-- STAR 1 -->
        <span>
          <i class="${
            props.value >= 1
              ? 'fa fa-star'
              : props.value >= 0.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }">
          </i>
        </span>

        <!-- STAR 2 -->
        <span>
          <i class="${
            props.value >= 2
              ? 'fa fa-star'
              : props.value >= 1.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }">
          </i>
        </span>

        <!-- STAR 3 -->
        <span>
          <i class="${
            props.value >= 3
              ? 'fa fa-star'
              : props.value >= 2.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }">
          </i>
        </span>

        <!-- STAR 4 -->
        <span>
          <i class="${
            props.value >= 4
              ? 'fa fa-star'
              : props.value >= 3.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }">
          </i>
        </span>

        <!-- STAR 5 -->
        <span>
          <i class="${
            props.value >= 5
              ? 'fa fa-star'
              : props.value >= 4.5
              ? 'fa fa-star-half-o'
              : 'fa fa-star-o'
          }">
          </i>
        </span>

         <!-- Show text next to stars -->
        <span> ${props.text || ''} </span>
      </div>    
    `;
  },
};

export default Rating;
